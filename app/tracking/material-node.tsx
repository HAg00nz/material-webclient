import { MaterialDto } from "@/api/dto/material.dto"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Handle, NodeProps, Position } from "reactflow"
import { MdArrowCircleDown } from "react-icons/md"
import { MdArrowCircleUp } from "react-icons/md"

export interface MaterialNodeProps {
  material: MaterialDto
  onNavParents: (m: number) => void
  onNavChildren: (m: number) => void
}

export function MaterialNode(props: NodeProps<MaterialNodeProps>) {
  return (
    <>
      <Card className='rounded-sm shadow-lg'>
        <CardHeader>
          <CardTitle>{props.data.material.materialNo}</CardTitle>
          <CardDescription className='text-center'>Knippa</CardDescription>
        </CardHeader>

        <div className='flex justify-center'>
          <CardContent>
            <Button
              variant='ghost'
              onClick={() => {
                props.data.onNavParents(props.data.material.materialId)
              }}
            >
              <MdArrowCircleUp className='text-2xl' />
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                props.data.onNavChildren(props.data.material.materialId)
              }}
            >
              <MdArrowCircleUp className='text-2xl' />
            </Button>
          </CardContent>
        </div>
      </Card>
      <Handle type='target' position={Position.Top} />
      <Handle type='source' position={Position.Bottom} />
    </>
  )
}
