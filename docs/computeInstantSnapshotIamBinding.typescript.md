# `computeInstantSnapshotIamBinding` Submodule <a name="`computeInstantSnapshotIamBinding` Submodule" id="@cdktf/provider-google.computeInstantSnapshotIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstantSnapshotIamBinding <a name="ComputeInstantSnapshotIamBinding" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding google_compute_instant_snapshot_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

new computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding(scope: Construct, id: string, config: ComputeInstantSnapshotIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig">ComputeInstantSnapshotIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig">ComputeInstantSnapshotIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.putCondition"></a>

```typescript
public putCondition(value: ComputeInstantSnapshotIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstantSnapshotIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isConstruct"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformElement"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformResource"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInstantSnapshotIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstantSnapshotIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstantSnapshotIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstantSnapshotIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference">ComputeInstantSnapshotIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.condition"></a>

```typescript
public readonly condition: ComputeInstantSnapshotIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference">ComputeInstantSnapshotIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ComputeInstantSnapshotIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstantSnapshotIamBindingCondition <a name="ComputeInstantSnapshotIamBindingCondition" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.Initializer"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

const computeInstantSnapshotIamBindingCondition: computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#expression ComputeInstantSnapshotIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#title ComputeInstantSnapshotIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#description ComputeInstantSnapshotIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#expression ComputeInstantSnapshotIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#title ComputeInstantSnapshotIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#description ComputeInstantSnapshotIamBinding#description}.

---

### ComputeInstantSnapshotIamBindingConfig <a name="ComputeInstantSnapshotIamBindingConfig" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.Initializer"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

const computeInstantSnapshotIamBindingConfig: computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#members ComputeInstantSnapshotIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#name ComputeInstantSnapshotIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#role ComputeInstantSnapshotIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#id ComputeInstantSnapshotIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#project ComputeInstantSnapshotIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#zone ComputeInstantSnapshotIamBinding#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#members ComputeInstantSnapshotIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#name ComputeInstantSnapshotIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#role ComputeInstantSnapshotIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ComputeInstantSnapshotIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#condition ComputeInstantSnapshotIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#id ComputeInstantSnapshotIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#project ComputeInstantSnapshotIamBinding#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_instant_snapshot_iam_binding#zone ComputeInstantSnapshotIamBinding#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstantSnapshotIamBindingConditionOutputReference <a name="ComputeInstantSnapshotIamBindingConditionOutputReference" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { computeInstantSnapshotIamBinding } from '@cdktf/provider-google'

new computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstantSnapshotIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstantSnapshotIamBinding.ComputeInstantSnapshotIamBindingCondition">ComputeInstantSnapshotIamBindingCondition</a>

---



