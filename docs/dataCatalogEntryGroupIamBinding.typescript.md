# `dataCatalogEntryGroupIamBinding` Submodule <a name="`dataCatalogEntryGroupIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntryGroupIamBinding <a name="DataCatalogEntryGroupIamBinding" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding google_data_catalog_entry_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

new dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding(scope: Construct, id: string, config: DataCatalogEntryGroupIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig">DataCatalogEntryGroupIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig">DataCatalogEntryGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition"></a>

```typescript
public putCondition(value: DataCatalogEntryGroupIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCatalogEntryGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCatalogEntryGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCatalogEntryGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCatalogEntryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogEntryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference">DataCatalogEntryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroupInput">entryGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroup">entryGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.condition"></a>

```typescript
public readonly condition: DataCatalogEntryGroupIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference">DataCatalogEntryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: DataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---

##### `entryGroupInput`<sup>Optional</sup> <a name="entryGroupInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroupInput"></a>

```typescript
public readonly entryGroupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.entryGroup"></a>

```typescript
public readonly entryGroup: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryGroupIamBindingCondition <a name="DataCatalogEntryGroupIamBindingCondition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.Initializer"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

const dataCatalogEntryGroupIamBindingCondition: dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#expression DataCatalogEntryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#title DataCatalogEntryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#description DataCatalogEntryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#expression DataCatalogEntryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#title DataCatalogEntryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#description DataCatalogEntryGroupIamBinding#description}.

---

### DataCatalogEntryGroupIamBindingConfig <a name="DataCatalogEntryGroupIamBindingConfig" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.Initializer"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

const dataCatalogEntryGroupIamBindingConfig: dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.entryGroup">entryGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#entry_group DataCatalogEntryGroupIamBinding#entry_group}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#members DataCatalogEntryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#role DataCatalogEntryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#id DataCatalogEntryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#project DataCatalogEntryGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#region DataCatalogEntryGroupIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entryGroup`<sup>Required</sup> <a name="entryGroup" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.entryGroup"></a>

```typescript
public readonly entryGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#entry_group DataCatalogEntryGroupIamBinding#entry_group}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#members DataCatalogEntryGroupIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#role DataCatalogEntryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: DataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#condition DataCatalogEntryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#id DataCatalogEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#project DataCatalogEntryGroupIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/data_catalog_entry_group_iam_binding#region DataCatalogEntryGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryGroupIamBindingConditionOutputReference <a name="DataCatalogEntryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { dataCatalogEntryGroupIamBinding } from '@cdktf/provider-google'

new dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCatalogEntryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntryGroupIamBinding.DataCatalogEntryGroupIamBindingCondition">DataCatalogEntryGroupIamBindingCondition</a>

---



