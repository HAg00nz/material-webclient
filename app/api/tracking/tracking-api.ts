import { MaterialDto } from "@/app/api/dto/material.dto"

export async function searchMaterial(
  searchText: string
): Promise<MaterialDto | undefined> {
  const response = await fetch(
    "https://api-ovako-idkontroll.azurewebsites.net/api/Material/1/1?search=" +
      searchText,
    {
      headers: {
        "x-api-key": "abd4dc6d29f947d483b33256ac21a0cb",
      },
    }
  )

  if (response.status == 200) {
    const m: MaterialDto[] = await response.json()
    console.log(m)
    return m[0]
  }
}

export async function getChildren(
  materialId: number
): Promise<MaterialDto[] | undefined> {
  const response = await fetch(
    `https://api-ovako-idkontroll.azurewebsites.net/api/Tracking/${materialId}/childmaterial`,
    {
      headers: {
        "x-api-key": "abd4dc6d29f947d483b33256ac21a0cb",
      },
    }
  )

  if (response.status == 200) {
    const m: MaterialDto[] = await response.json()
    return m
  }
}

export async function getParents(
  materialId: number
): Promise<MaterialDto[] | undefined> {
  const response = await fetch(
    `https://api-ovako-idkontroll.azurewebsites.net/api/Tracking/${materialId}/parentmaterial`,
    {
      headers: {
        "x-api-key": "abd4dc6d29f947d483b33256ac21a0cb",
      },
    }
  )

  if (response.status == 200) {
    const m: MaterialDto[] = await response.json()
    return m
  }
}
