# `storageManagedFolderIamBinding` Submodule <a name="`storageManagedFolderIamBinding` Submodule" id="@cdktf/provider-google.storageManagedFolderIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageManagedFolderIamBinding <a name="StorageManagedFolderIamBinding" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding google_storage_managed_folder_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

new storageManagedFolderIamBinding.StorageManagedFolderIamBinding(scope: Construct, id: string, config: StorageManagedFolderIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig">StorageManagedFolderIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig">StorageManagedFolderIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.putCondition"></a>

```typescript
public putCondition(value: StorageManagedFolderIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageManagedFolderIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isConstruct"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformElement"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformResource"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageManagedFolderIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageManagedFolderIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageManagedFolderIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageManagedFolderIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference">StorageManagedFolderIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.managedFolderInput">managedFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.managedFolder">managedFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.condition"></a>

```typescript
public readonly condition: StorageManagedFolderIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference">StorageManagedFolderIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: StorageManagedFolderIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedFolderInput`<sup>Optional</sup> <a name="managedFolderInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.managedFolderInput"></a>

```typescript
public readonly managedFolderInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedFolder`<sup>Required</sup> <a name="managedFolder" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.managedFolder"></a>

```typescript
public readonly managedFolder: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageManagedFolderIamBindingCondition <a name="StorageManagedFolderIamBindingCondition" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.Initializer"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

const storageManagedFolderIamBindingCondition: storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#expression StorageManagedFolderIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#title StorageManagedFolderIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#description StorageManagedFolderIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#expression StorageManagedFolderIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#title StorageManagedFolderIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#description StorageManagedFolderIamBinding#description}.

---

### StorageManagedFolderIamBindingConfig <a name="StorageManagedFolderIamBindingConfig" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.Initializer"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

const storageManagedFolderIamBindingConfig: storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#bucket StorageManagedFolderIamBinding#bucket}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.managedFolder">managedFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#managed_folder StorageManagedFolderIamBinding#managed_folder}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#members StorageManagedFolderIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#role StorageManagedFolderIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#id StorageManagedFolderIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#bucket StorageManagedFolderIamBinding#bucket}.

---

##### `managedFolder`<sup>Required</sup> <a name="managedFolder" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.managedFolder"></a>

```typescript
public readonly managedFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#managed_folder StorageManagedFolderIamBinding#managed_folder}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#members StorageManagedFolderIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#role StorageManagedFolderIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: StorageManagedFolderIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#condition StorageManagedFolderIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/storage_managed_folder_iam_binding#id StorageManagedFolderIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageManagedFolderIamBindingConditionOutputReference <a name="StorageManagedFolderIamBindingConditionOutputReference" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { storageManagedFolderIamBinding } from '@cdktf/provider-google'

new storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageManagedFolderIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageManagedFolderIamBinding.StorageManagedFolderIamBindingCondition">StorageManagedFolderIamBindingCondition</a>

---



