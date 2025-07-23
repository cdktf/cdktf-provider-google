# `computeDiskAsyncReplication` Submodule <a name="`computeDiskAsyncReplication` Submodule" id="@cdktf/provider-google.computeDiskAsyncReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDiskAsyncReplication <a name="ComputeDiskAsyncReplication" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication google_compute_disk_async_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

new computeDiskAsyncReplication.ComputeDiskAsyncReplication(scope: Construct, id: string, config: ComputeDiskAsyncReplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk">putSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecondaryDisk` <a name="putSecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk"></a>

```typescript
public putSecondaryDisk(value: ComputeDiskAsyncReplicationSecondaryDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeDiskAsyncReplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeDiskAsyncReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeDiskAsyncReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeDiskAsyncReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk">secondaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput">primaryDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput">secondaryDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk">primaryDisk</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secondaryDisk`<sup>Required</sup> <a name="secondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk"></a>

```typescript
public readonly secondaryDisk: ComputeDiskAsyncReplicationSecondaryDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeDiskAsyncReplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `primaryDiskInput`<sup>Optional</sup> <a name="primaryDiskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput"></a>

```typescript
public readonly primaryDiskInput: string;
```

- *Type:* string

---

##### `secondaryDiskInput`<sup>Optional</sup> <a name="secondaryDiskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput"></a>

```typescript
public readonly secondaryDiskInput: ComputeDiskAsyncReplicationSecondaryDisk;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeDiskAsyncReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `primaryDisk`<sup>Required</sup> <a name="primaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk"></a>

```typescript
public readonly primaryDisk: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskAsyncReplicationConfig <a name="ComputeDiskAsyncReplicationConfig" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

const computeDiskAsyncReplicationConfig: computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk">primaryDisk</a></code> | <code>string</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk">secondaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryDisk`<sup>Required</sup> <a name="primaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk"></a>

```typescript
public readonly primaryDisk: string;
```

- *Type:* string

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#primary_disk ComputeDiskAsyncReplication#primary_disk}

---

##### `secondaryDisk`<sup>Required</sup> <a name="secondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk"></a>

```typescript
public readonly secondaryDisk: ComputeDiskAsyncReplicationSecondaryDisk;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#secondary_disk ComputeDiskAsyncReplication#secondary_disk}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeDiskAsyncReplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#timeouts ComputeDiskAsyncReplication#timeouts}

---

### ComputeDiskAsyncReplicationSecondaryDisk <a name="ComputeDiskAsyncReplicationSecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

const computeDiskAsyncReplicationSecondaryDisk: computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk">disk</a></code> | <code>string</code> | Secondary disk for asynchronous replication. |

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#disk ComputeDiskAsyncReplication#disk}

---

### ComputeDiskAsyncReplicationTimeouts <a name="ComputeDiskAsyncReplicationTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

const computeDiskAsyncReplicationTimeouts: computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskAsyncReplicationSecondaryDiskOutputReference <a name="ComputeDiskAsyncReplicationSecondaryDiskOutputReference" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

new computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput">diskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeDiskAsyncReplicationSecondaryDisk;
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---


### ComputeDiskAsyncReplicationTimeoutsOutputReference <a name="ComputeDiskAsyncReplicationTimeoutsOutputReference" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeDiskAsyncReplication } from '@cdktf/provider-google'

new computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeDiskAsyncReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---



