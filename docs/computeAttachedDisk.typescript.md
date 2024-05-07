# `computeAttachedDisk` Submodule <a name="`computeAttachedDisk` Submodule" id="@cdktf/provider-google.computeAttachedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAttachedDisk <a name="ComputeAttachedDisk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk google_compute_attached_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

new computeAttachedDisk.ComputeAttachedDisk(scope: Construct, id: string, config: ComputeAttachedDiskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig">ComputeAttachedDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig">ComputeAttachedDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeAttachedDiskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeAttachedDisk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

computeAttachedDisk.ComputeAttachedDisk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

computeAttachedDisk.ComputeAttachedDisk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

computeAttachedDisk.ComputeAttachedDisk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeAttachedDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeAttachedDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeAttachedDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeAttachedDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference">ComputeAttachedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.diskInput">diskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeAttachedDiskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference">ComputeAttachedDiskTimeoutsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.diskInput"></a>

```typescript
public readonly diskInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeAttachedDiskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAttachedDiskConfig <a name="ComputeAttachedDiskConfig" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.Initializer"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

const computeAttachedDiskConfig: computeAttachedDisk.ComputeAttachedDiskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.disk">disk</a></code> | <code>string</code> | name or self_link of the disk that will be attached. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.instance">instance</a></code> | <code>string</code> | name or self_link of the compute instance that the disk will be attached to. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.deviceName">deviceName</a></code> | <code>string</code> | Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#id ComputeAttachedDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.mode">mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.project">project</a></code> | <code>string</code> | The project that the referenced compute instance is a part of. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.zone">zone</a></code> | <code>string</code> | The zone that the referenced compute instance is located within. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

name or self_link of the disk that will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#disk ComputeAttachedDisk#disk}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

name or self_link of the compute instance that the disk will be attached to.

If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#instance ComputeAttachedDisk#instance}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance.

This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#device_name ComputeAttachedDisk#device_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#id ComputeAttachedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#mode ComputeAttachedDisk#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that the referenced compute instance is a part of.

If instance is referenced by its self_link the project defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#project ComputeAttachedDisk#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeAttachedDiskTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#timeouts ComputeAttachedDisk#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone that the referenced compute instance is located within.

If instance is referenced by its self_link the zone defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#zone ComputeAttachedDisk#zone}

---

### ComputeAttachedDiskTimeouts <a name="ComputeAttachedDiskTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.Initializer"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

const computeAttachedDiskTimeouts: computeAttachedDisk.ComputeAttachedDiskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#create ComputeAttachedDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#delete ComputeAttachedDisk#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#create ComputeAttachedDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_attached_disk#delete ComputeAttachedDisk#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAttachedDiskTimeoutsOutputReference <a name="ComputeAttachedDiskTimeoutsOutputReference" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeAttachedDisk } from '@cdktf/provider-google'

new computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeAttachedDiskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

---



