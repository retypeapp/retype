# Translations

Use [`labels`](project.md#labels) and [`locale`](project.md#locale) to customize Retype's built-in UI text, including search labels, table of contents labels, next and previous buttons, callout titles, and much more.

The default values for all supported languages are available in the [`retype-translations`](https://github.com/retypeapp/retype-translations) project.

## How `labels` work

The table of [keys](#keys) below lists all the labels that can be customized in Retype.

If you see a label in your project that you want to customize, check the table below to find the corresponding key.

Label key lookup is case-insensitive and treats `_` and `-` as equivalent. For example, `Search_Input_Placeholder` and `search_input_placeholder` and `search-input-placeholder` are all treated as the same key.

Label collections are also case-insensitive, so `fr` and `FR` refer to the collection of keys. In this case, French language translations. 

### Default labels

Use `labels.default` to set project-wide fallback values and to override the English defaults.

```yml
labels:
  default:
    search_input_placeholder: Search the docs
    toc_contents_label: On this page
```

### Locale-specific labels

When [`locale`](project.md#locale) is set to a supported built-in locale such as `fr`, Retype loads the built-in translated strings for that locale and then applies any matching `labels.<locale>` overrides.

```yml
locale: fr

labels:
  default:
    toolbar_filter_placeholder: Filter docs

  fr:
    search_input_placeholder: Rechercher dans la documentation
    toc_contents_label: Sur cette page
```

One subtle point matters here: `labels.default` does not automatically replace built-in non-English translations. If a supported locale already has a built-in translated value, that value remains in use unless you override the same key in `labels.<locale>`.

### Custom groups

You can also set `locale` to a custom value and provide a matching group in `labels`. This is useful for partner portals, internal docs, or branded variants that need wording different from the built-in locales.

```yml
locale: partner

labels:
  default:
    search_input_placeholder: Search docs

  partner:
    search_input_placeholder: Search partner docs
    toc_contents_label: In this section
```

With a custom locale, Retype uses the matching collection as the active locale source and falls back to `labels.default` when needed.

## Template access

Using the [template](/templating/project-properties.md) syntax, all label values are available from the `project.labels` object.

The following sample demonstrates how to get the label value for a specific key:

```
{{ project.labels["Search_NoResults_Label"] }}
```

The above outputs the value: `Sorry, no results found.`

You can also access a specific locale using the following syntax:

```
{{ project.labels.fr["Search_NoResults_Label"] }}
```

The above outputs the value: `Désolé, aucun résultat trouvé.`

## Keys

The following table lists all the keys and default values that can be customized in a Retype project. The `es` (Spanish) values are also provided for reference.

| Key | `default` (English) | `es` (Spanish) |
| --- | --- | --- |
| `Callout_Caution_Title` | CAUTION | PRECAUCIÓN |
| `Callout_Danger_Title` | DANGER | PELIGRO |
| `Callout_Info_Title` | INFO | INFORMACIÓN |
| `Callout_Note_Title` | NOTE | NOTA |
| `Callout_Tip_Title` | TIP | CONSEJO |
| `API_AccessFilter_Label` | Access | Acceso |
| `API_ClassType_Name` | Class | Clase |
| `API_CopiedAckHint_Label` | Copied! | Copiado! |
| `API_CopyHint_Label` | Copy | Copiar |
| `API_CopyLinkHint_Label` | Copy link | Copiar enlace |
| `API_CopyNameHint_Label` | Copy name | Copiar nombre |
| `API_DefaultParameterValue_Label` | Default value | Valor predeterminado |
| `API_DelegateType_Name` | Delegate | Delegado |
| `API_EnumType_Name` | Enum | Enumeración |
| `API_EventGroup_Title` | Events | Eventos |
| `API_FieldGroup_Title` | Fields | Campos |
| `API_InheritedFilter_Label` | Inherited | Heredado |
| `API_InterfaceType_Name` | Interface | Interfaz |
| `API_MethodGroup_Title` | Methods | Métodos |
| `API_MoreDropdownItems_Label` | More | Más |
| `API_MoreOverloads_Label` | more | más |
| `API_OptionalParameter_Label` | optional | opcional |
| `API_ParameterSection_Label` | PARAMETERS | PARÁMETROS |
| `API_PropertyGroup_Title` | Properties | Propiedades |
| `API_ProtectedAccess_Name` | Protected | Protegido |
| `API_PublicAccess_Name` | Public | Público |
| `API_RecordType_Name` | Record | Registro |
| `API_SecurityAlert_Title` | Security | Seguridad |
| `API_SecurityNoteAlert_Title` | Security Note | Nota de seguridad |
| `API_SignatureSection_Label` | SIGNATURE | FIRMA |
| `API_StructType_Name` | Struct | Structura |
| `API_TypeHierarchyPanel_Title` | Hierarchy | Jerarquía |
| `ContentFooter_NewerButton_Label` | Newer | Más nuevo |
| `ContentFooter_NextButton_Label` | Next | Siguiente |
| `ContentFooter_OlderButton_Label` | Older | Más antiguo |
| `ContentFooter_PrevButton_Label` | Previous | Anterior |
| `ContentFooter_LastUpdated_AbsoluteTemplate` | Last updated on {0} | Última actualización el {0} |
| `ContentFooter_LastUpdated_AbsoluteByTemplate` | Last updated on {0} by {1} | Última actualización el {0} por {1} |
| `ContentFooter_LastUpdated_RelativeTemplate` | Last updated {0} | Última actualización {0} |
| `ContentFooter_LastUpdated_RelativeByTemplate` | Last updated {0} by {1} | Última actualización {0} por {1} |
| `Default_DateFormat` | yyyy-MM-dd | yyyy-MM-dd |
| `Editor_CancelButton_Label` | Cancel | Cancelar |
| `Editor_EditButton_Label` | Edit | Editar |
| `Editor_SaveButton_Label` | Save | Guardar |
| `Filter_NoMembersFound_Label` | No member names found containing the query | No se encontraron nombres de miembros que contengan la consulta |
| `History_AgoTime_Label` | ago | hace |
| `History_ClearLink_Label` | Clear | Limpiar |
| `History_DayTime_Label` | d | d |
| `History_HourTime_Label` | h | h |
| `History_JustNowTime_Label` | just now | justo ahora |
| `History_MinuteTime_Label` | m | min |
| `History_MonthTime_Label` | mo | mes |
| `History_NoHistory_Label` | No history items | No hay elementos de historial |
| `History_SecondTime_Label` | s | s |
| `History_Title_Label` | History | Historial |
| `History_YearTime_Label` | y | año |
| `Note_Question_Title` | Question | Pregunta |
| `Note_Caution_Title` | Caution | Precaución |
| `Note_Important_Title` | Important | Importante |
| `Note_Note_Title` | Note | Nota |
| `Note_Tip_Title` | Tip | Consejo |
| `Note_Warning_Title` | Warning | Advertencia |
| `PageMeta_By_Label` | By | Por |
| `PageMeta_In_Label` | In | En |
| `PageMeta_Published_Label` | Published | Publicado |
| `Panel_Title_Details` | Details | Detalles |
| `Page_404_GoToHomeButton_Label` | Go to homepage | Ir a la página principal |
| `Page_404_MessageBody` | You may have mistyped the address or the page may have been moved. | Puede que haya escrito incorrectamente la dirección o que la página se haya movido. |
| `Page_404_MessageTitle` | Oops! The page you’re looking for doesn’t exist. | ¡Vaya! La página que buscas no existe. |
| `Page_404_Title` | Not Found | No encontrado |
| `Page_Blog_Title` | Blog | Blog |
| `Page_Page` | Page | Page |
| `Page_Categories_Title` | Categories | Categorías |
| `Page_Category_Categories_Label` | categories | categorías |
| `Page_Category_SeeAll_Label` | See all | Ver todas |
| `Page_Category_Title` | Category | Categoría |
| `Page_Docs_Title` | Docs | Documentos |
| `Page_Tags_Title` | Tags | Etiquetas |
| `Page_Tag_SeeAll_Label` | See all | Ver todas |
| `Page_Tag_Tags_Label` | tags | etiquetas |
| `Page_Tag_Title` | Tag | Etiqueta |
| `Page_Welcome_Title` | Welcome | Bienvenido/a |
| `Plugin_Edit_EditThisPage_Label` | Edit this page | Editar esta página |
| `PrivatePage_Password_Label` | Enter password: | Introduzca la contraseña: |
| `PrivatePage_Password_Title` | This page is password protected | Esta página está protegida con contraseña |
| `PrivatePage_Password_Unlock` | Unlock | Desbloquear |
| `PrivatePage_Password_Wrong` | Wrong password! | ¡Contraseña incorrecta! |
| `Project_DefaultTitle_Value` | Project Name | Nombre del proyecto |
| `Search_Input_Placeholder` | Search | Buscar |
| `Search_Navigate_Label` | navigate | navegar |
| `Search_NoResults_Label` | Sorry, no results found. | Lo siento, no se encontraron resultados. |
| `Search_Open_Label` | open | abrir |
| `Search_Close_Label` | close | cerrar |
| `Search_TopResults_Label` | Top {0} results | Top {0} resultados |
| `Search_Result_Singular_Label` | {0} result | {0} resultado |
| `Search_Result_Plural_Label` | {0} results | {0} resultados |
| `Sidebar_Filter_Placeholder` | Filter | Filtrar |
| `Toc_Contents_Label` | Contents | Contenidos |
| `Toc_RelatedClasses_Label` | Related Classes | Clases relacionadas |
| `Toolbar_Access_Placeholder` | Access | Acceso |
| `Toolbar_Filters_Placeholder` | Filters | Filtros |
| `Toolbar_Filter_Placeholder` | Filter | Filtrar |
| `Text_Light` | Light | Claro |
| `Text_Dark` | Dark | Oscuro |
| `Text_System` | System | Sistema |
| `Backlinks_Title` | See also | Véase también |

*[CSS]: Cascading Style Sheet
*[HTML]: Hyper Text Markup Language
