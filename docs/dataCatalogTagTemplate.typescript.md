# `dataCatalogTagTemplate` Submodule <a name="`dataCatalogTagTemplate` Submodule" id="@cdktf/provider-google.dataCatalogTagTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTagTemplate <a name="DataCatalogTagTemplate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template google_data_catalog_tag_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplate(scope: Construct, id: string, config: DataCatalogTagTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig">DataCatalogTagTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig">DataCatalogTagTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields"></a>

```typescript
public putFields(value: IResolvable | DataCatalogTagTemplateFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: DataCatalogTagTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCatalogTagTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCatalogTagTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCatalogTagTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCatalogTagTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogTagTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput">fieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput">tagTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId">tagTemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields"></a>

```typescript
public readonly fields: DataCatalogTagTemplateFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: DataCatalogTagTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | DataCatalogTagTemplateFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagTemplateIdInput`<sup>Optional</sup> <a name="tagTemplateIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput"></a>

```typescript
public readonly tagTemplateIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataCatalogTagTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tagTemplateId`<sup>Required</sup> <a name="tagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId"></a>

```typescript
public readonly tagTemplateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTagTemplateConfig <a name="DataCatalogTagTemplateConfig" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateConfig: dataCatalogTagTemplate.DataCatalogTagTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields">fields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]</code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId">tagTemplateId</a></code> | <code>string</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region">region</a></code> | <code>string</code> | Template location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | DataCatalogTagTemplateFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#fields DataCatalogTagTemplate#fields}

---

##### `tagTemplateId`<sup>Required</sup> <a name="tagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId"></a>

```typescript
public readonly tagTemplateId: string;
```

- *Type:* string

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#tag_template_id DataCatalogTagTemplate#tag_template_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#force_delete DataCatalogTagTemplate#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#region DataCatalogTagTemplate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataCatalogTagTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#timeouts DataCatalogTagTemplate#timeouts}

---

### DataCatalogTagTemplateFields <a name="DataCatalogTagTemplateFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateFields: dataCatalogTagTemplate.DataCatalogTagTemplateFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId">fieldId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type">type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description">description</a></code> | <code>string</code> | A description for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName">displayName</a></code> | <code>string</code> | The display name for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this is a required field. Defaults to false. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order">order</a></code> | <code>number</code> | The order of this field with respect to other fields in this tag template. |

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId"></a>

```typescript
public readonly fieldId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type"></a>

```typescript
public readonly type: DataCatalogTagTemplateFieldsType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#type DataCatalogTagTemplate#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#description DataCatalogTagTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this is a required field. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#is_required DataCatalogTagTemplate#is_required}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

The order of this field with respect to other fields in this tag template.

A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#order DataCatalogTagTemplate#order}

---

### DataCatalogTagTemplateFieldsType <a name="DataCatalogTagTemplateFieldsType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateFieldsType: dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType">enumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | enum_type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType">primitiveType</a></code> | <code>string</code> | Represents primitive types - string, bool etc. |

---

##### `enumType`<sup>Optional</sup> <a name="enumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType"></a>

```typescript
public readonly enumType: DataCatalogTagTemplateFieldsTypeEnumType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#enum_type DataCatalogTagTemplate#enum_type}

---

##### `primitiveType`<sup>Optional</sup> <a name="primitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType"></a>

```typescript
public readonly primitiveType: string;
```

- *Type:* string

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#primitive_type DataCatalogTagTemplate#primitive_type}

---

### DataCatalogTagTemplateFieldsTypeEnumType <a name="DataCatalogTagTemplateFieldsTypeEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateFieldsTypeEnumType: dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues">allowedValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]</code> | allowed_values block. |

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues"></a>

```typescript
public readonly allowedValues: IResolvable | DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#allowed_values DataCatalogTagTemplate#allowed_values}

---

### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues: dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName">displayName</a></code> | <code>string</code> | The display name of the enum value. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

### DataCatalogTagTemplateTimeouts <a name="DataCatalogTagTemplateTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

const dataCatalogTagTemplateTimeouts: dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTagTemplateFieldsList <a name="DataCatalogTagTemplateFieldsList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get"></a>

```typescript
public get(index: number): DataCatalogTagTemplateFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogTagTemplateFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>[]

---


### DataCatalogTagTemplateFieldsOutputReference <a name="DataCatalogTagTemplateFieldsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType">putType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putType` <a name="putType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType"></a>

```typescript
public putType(value: DataCatalogTagTemplateFieldsType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type">type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput">typeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type"></a>

```typescript
public readonly type: DataCatalogTagTemplateFieldsTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput"></a>

```typescript
public readonly fieldIdInput: string;
```

- *Type:* string

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: DataCatalogTagTemplateFieldsType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogTagTemplateFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get"></a>

```typescript
public get(index: number): DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>

---


### DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues">putAllowedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedValues` <a name="putAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues"></a>

```typescript
public putAllowedValues(value: IResolvable | DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues">allowedValues</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a>

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: IResolvable | DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCatalogTagTemplateFieldsTypeEnumType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---


### DataCatalogTagTemplateFieldsTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType">putEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType">resetEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType">resetPrimitiveType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumType` <a name="putEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType"></a>

```typescript
public putEnumType(value: DataCatalogTagTemplateFieldsTypeEnumType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `resetEnumType` <a name="resetEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType"></a>

```typescript
public resetEnumType(): void
```

##### `resetPrimitiveType` <a name="resetPrimitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType"></a>

```typescript
public resetPrimitiveType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType">enumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput">enumTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput">primitiveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType">primitiveType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType"></a>

```typescript
public readonly enumType: DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a>

---

##### `enumTypeInput`<sup>Optional</sup> <a name="enumTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput"></a>

```typescript
public readonly enumTypeInput: DataCatalogTagTemplateFieldsTypeEnumType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `primitiveTypeInput`<sup>Optional</sup> <a name="primitiveTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput"></a>

```typescript
public readonly primitiveTypeInput: string;
```

- *Type:* string

---

##### `primitiveType`<sup>Required</sup> <a name="primitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType"></a>

```typescript
public readonly primitiveType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCatalogTagTemplateFieldsType;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---


### DataCatalogTagTemplateTimeoutsOutputReference <a name="DataCatalogTagTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataCatalogTagTemplate } from '@cdktf/provider-google'

new dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCatalogTagTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

---



