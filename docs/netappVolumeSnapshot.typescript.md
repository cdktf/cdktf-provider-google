# `netappVolumeSnapshot` Submodule <a name="`netappVolumeSnapshot` Submodule" id="@cdktf/provider-google.netappVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeSnapshot <a name="NetappVolumeSnapshot" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot google_netapp_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

new netappVolumeSnapshot.NetappVolumeSnapshot(scope: Construct, id: string, config: NetappVolumeSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig">NetappVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig">NetappVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetappVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference">NetappVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.usedBytes">usedBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference">NetappVolumeSnapshotTimeoutsOutputReference</a>

---

##### `usedBytes`<sup>Required</sup> <a name="usedBytes" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.usedBytes"></a>

```typescript
public readonly usedBytes: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeSnapshotConfig <a name="NetappVolumeSnapshotConfig" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.Initializer"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

const netappVolumeSnapshotConfig: netappVolumeSnapshot.NetappVolumeSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.location">location</a></code> | <code>string</code> | Name of the snapshot location. Snapshots are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.name">name</a></code> | <code>string</code> | The name of the snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.volumeName">volumeName</a></code> | <code>string</code> | The name of the volume to create the snapshot in. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.description">description</a></code> | <code>string</code> | Description for the snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#id NetappVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#project NetappVolumeSnapshot#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#location NetappVolumeSnapshot#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#name NetappVolumeSnapshot#name}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The name of the volume to create the snapshot in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#volume_name NetappVolumeSnapshot#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#description NetappVolumeSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#id NetappVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#labels NetappVolumeSnapshot#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#project NetappVolumeSnapshot#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#timeouts NetappVolumeSnapshot#timeouts}

---

### NetappVolumeSnapshotTimeouts <a name="NetappVolumeSnapshotTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.Initializer"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

const netappVolumeSnapshotTimeouts: netappVolumeSnapshot.NetappVolumeSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#create NetappVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#delete NetappVolumeSnapshot#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#update NetappVolumeSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#create NetappVolumeSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#delete NetappVolumeSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/netapp_volume_snapshot#update NetappVolumeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeSnapshotTimeoutsOutputReference <a name="NetappVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolumeSnapshot } from '@cdktf/provider-google'

new netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

---



