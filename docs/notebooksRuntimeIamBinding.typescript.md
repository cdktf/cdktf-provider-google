# `notebooksRuntimeIamBinding` Submodule <a name="`notebooksRuntimeIamBinding` Submodule" id="@cdktf/provider-google.notebooksRuntimeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntimeIamBinding <a name="NotebooksRuntimeIamBinding" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding google_notebooks_runtime_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

new notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding(scope: Construct, id: string, config: NotebooksRuntimeIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig">NotebooksRuntimeIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig">NotebooksRuntimeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.putCondition"></a>

```typescript
public putCondition(value: NotebooksRuntimeIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksRuntimeIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isConstruct"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformElement"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformResource"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotebooksRuntimeIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotebooksRuntimeIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotebooksRuntimeIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksRuntimeIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference">NotebooksRuntimeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.runtimeNameInput">runtimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.condition"></a>

```typescript
public readonly condition: NotebooksRuntimeIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference">NotebooksRuntimeIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: NotebooksRuntimeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `runtimeNameInput`<sup>Optional</sup> <a name="runtimeNameInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.runtimeNameInput"></a>

```typescript
public readonly runtimeNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeIamBindingCondition <a name="NotebooksRuntimeIamBindingCondition" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.Initializer"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

const notebooksRuntimeIamBindingCondition: notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#expression NotebooksRuntimeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#title NotebooksRuntimeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#description NotebooksRuntimeIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#expression NotebooksRuntimeIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#title NotebooksRuntimeIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#description NotebooksRuntimeIamBinding#description}.

---

### NotebooksRuntimeIamBindingConfig <a name="NotebooksRuntimeIamBindingConfig" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.Initializer"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

const notebooksRuntimeIamBindingConfig: notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#members NotebooksRuntimeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#role NotebooksRuntimeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.runtimeName">runtimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#runtime_name NotebooksRuntimeIamBinding#runtime_name}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#id NotebooksRuntimeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#location NotebooksRuntimeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#project NotebooksRuntimeIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#members NotebooksRuntimeIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#role NotebooksRuntimeIamBinding#role}.

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#runtime_name NotebooksRuntimeIamBinding#runtime_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: NotebooksRuntimeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#condition NotebooksRuntimeIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#id NotebooksRuntimeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#location NotebooksRuntimeIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/notebooks_runtime_iam_binding#project NotebooksRuntimeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksRuntimeIamBindingConditionOutputReference <a name="NotebooksRuntimeIamBindingConditionOutputReference" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { notebooksRuntimeIamBinding } from '@cdktf/provider-google'

new notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksRuntimeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamBinding.NotebooksRuntimeIamBindingCondition">NotebooksRuntimeIamBindingCondition</a>

---



