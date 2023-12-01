"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { mainmenuLinks } from "./menuitems/mainmenulinks"
import { abhLinks } from "./menuitems/abhlinks"
import { ceaxLinks } from "./menuitems/ceaxlinks"
import { draproLinks } from "./menuitems/draprolinks"
import { pebaLinks } from "./menuitems/pebalinks"
import { precoLinks } from "./menuitems/precolinks"
import { sthLinks } from "./menuitems/sthlinks"
import { valsverkLinks } from "./menuitems/valsverklinks"
import { vbhLinks } from "./menuitems/vbhlinks"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import MenuItem from "./menuitem"

const MainMenu = () => {
  const currentPath = usePathname()

  return (
    <div>
      <ul>
        {mainmenuLinks.map((menuitem) => (
          <MenuItem
            key={menuitem.id}
            name={menuitem.name}
            href={menuitem.href}
          />
        ))}
      </ul>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Ceax</AccordionTrigger>
          <AccordionContent>
            <ul>
              {ceaxLinks.map((menuitem) => (
                <MenuItem
                  key={menuitem.id}
                  name={menuitem.name}
                  href={menuitem.href}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Drapro</AccordionTrigger>
          <AccordionContent>
            <ul>
              {draproLinks.map((menuitem) => (
                <MenuItem
                  key={menuitem.id}
                  name={menuitem.name}
                  href={menuitem.href}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Peba</AccordionTrigger>
          <AccordionContent>
            <ul>
              {pebaLinks.map((menuitem) => (
                <MenuItem
                  key={menuitem.id}
                  name={menuitem.name}
                  href={menuitem.href}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Preco</AccordionTrigger>
          <AccordionContent>
            {precoLinks.map((menuitem) => (
              <MenuItem
                key={menuitem.id}
                name={menuitem.name}
                href={menuitem.href}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>VBH</AccordionTrigger>
          <AccordionContent>
            {vbhLinks.map((menuitem) => (
              <MenuItem
                key={menuitem.id}
                name={menuitem.name}
                href={menuitem.href}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger>STH</AccordionTrigger>
          <AccordionContent>
            {sthLinks.map((menuitem) => (
              <MenuItem
                key={menuitem.id}
                name={menuitem.name}
                href={menuitem.href}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-7'>
          <AccordionTrigger>Valsverk</AccordionTrigger>
          <AccordionContent>
            {valsverkLinks.map((menuitem) => (
              <MenuItem
                key={menuitem.id}
                name={menuitem.name}
                href={menuitem.href}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-8'>
          <AccordionTrigger>ABH</AccordionTrigger>
          <AccordionContent>
            {abhLinks.map((menuitem) => (
              <MenuItem
                key={menuitem.id}
                name={menuitem.name}
                href={menuitem.href}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default MainMenu
