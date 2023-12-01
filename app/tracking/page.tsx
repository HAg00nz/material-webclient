"use client"

import { useCallback, useRef, useState } from "react"
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  ConnectionLineType,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"
import { MaterialNode } from "./material-node"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MaterialDto } from "@/api/dto/material.dto"
import dagre from "@dagrejs/dagre"
import { getChildren, searchMaterial } from "../api/tracking/tracking-api"

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 250
const nodeHeight = 150

const getLayoutedElements = (nodes: any, edges: any, direction = "TB") => {
  const isHorizontal = direction === "LR"
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach((node: any) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge: any) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.forEach((node: any) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? "left" : "top"
    node.sourcePosition = isHorizontal ? "right" : "bottom"

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    }

    return node
  })

  return { nodes, edges }
}

const defaultEdgeOptions = {
  animated: false,
  type: ConnectionLineType.SimpleBezier,
}

const nodeTypes = { material: MaterialNode }

function Tracking() {
  const [searchText, setSearchText] = useState("112151-KA04")
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const nextY = useRef(5)

  const onLayout = useCallback(
    (direction: string | undefined) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction)

      setNodes([...layoutedNodes])
      setEdges([...layoutedEdges])
    },
    [nodes, edges, setNodes, setEdges]
  )

  async function search() {
    const material = await searchMaterial(searchText)

    if (material != undefined) {
      console.log(material)
      addNode(material)
    }
  }

  function navParents(m: number) {}

  async function navChildren(materialId: number) {
    const childMaterial = await getChildren(materialId)

    if (childMaterial != undefined) {
      childMaterial.forEach((c) => {
        addNode(c)
        addEdge(materialId, c.materialId)
      })
    }
  }

  function addEdge(sourceMaterialId: number, destinationMaterialId: number) {
    setEdges((prev) => [
      ...prev,
      {
        id:
          sourceMaterialId.toString() + "-" + destinationMaterialId.toString(),
        source: sourceMaterialId.toString(),
        target: destinationMaterialId.toString(),
      },
    ])
  }

  function addNode(m: MaterialDto) {
    const mn = {
      id: m.materialId.toString(),
      type: "material",
      data: {
        material: m,
        onNavParents: navParents,
        onNavChildren: navChildren,
      },
      position: { x: 250, y: nextY.current },
    }

    setNodes((prev) => [...prev, mn])

    nextY.current += 200
  }

  return (
    <>
      <div className='flex'>
        <Button variant='outline' onClick={() => search()}>
          Sök
        </Button>
        <Input
          defaultValue={"112151-KA04"}
          onChange={(t) => {
            setSearchText(t.target.value)
          }}
        />
      </div>
      <div className='flex w-[300vh] h-full'>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          //onConnect={onConnect}
          defaultEdgeOptions={defaultEdgeOptions}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        >
          <Background />
          <Controls />
          <Panel position='top-left'>
            <Button variant='outline' onClick={() => onLayout("TB")}>
              vertical layout
            </Button>
            <Button variant='outline' onClick={() => onLayout("LR")}>
              horizontal layout
            </Button>
          </Panel>
        </ReactFlow>
      </div>
    </>
  )
}

export default Tracking
