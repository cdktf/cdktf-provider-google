# `netappVolumeReplication` Submodule <a name="`netappVolumeReplication` Submodule" id="@cdktf/provider-google.netappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeReplication <a name="NetappVolumeReplication" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

new netappVolumeReplication.NetappVolumeReplication(scope: Construct, id: string, config: NetappVolumeReplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig">NetappVolumeReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig">NetappVolumeReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters">putDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume">resetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters">resetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping">resetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled">resetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror">resetWaitForMirror</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationVolumeParameters` <a name="putDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters"></a>

```typescript
public putDestinationVolumeParameters(value: NetappVolumeReplicationDestinationVolumeParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeReplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---

##### `resetDeleteDestinationVolume` <a name="resetDeleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDeleteDestinationVolume"></a>

```typescript
public resetDeleteDestinationVolume(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationVolumeParameters` <a name="resetDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetDestinationVolumeParameters"></a>

```typescript
public resetDestinationVolumeParameters(): void
```

##### `resetForceStopping` <a name="resetForceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetForceStopping"></a>

```typescript
public resetForceStopping(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReplicationEnabled` <a name="resetReplicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetReplicationEnabled"></a>

```typescript
public resetReplicationEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForMirror` <a name="resetWaitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.resetWaitForMirror"></a>

```typescript
public resetWaitForMirror(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

netappVolumeReplication.NetappVolumeReplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

netappVolumeReplication.NetappVolumeReplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

netappVolumeReplication.NetappVolumeReplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

netappVolumeReplication.NetappVolumeReplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume">destinationVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState">mirrorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats">transferStats</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput">deleteDestinationVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput">destinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput">forceStoppingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput">replicationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput">waitForMirrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping">forceStopping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled">replicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror">waitForMirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationVolume`<sup>Required</sup> <a name="destinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolume"></a>

```typescript
public readonly destinationVolume: string;
```

- *Type:* string

---

##### `destinationVolumeParameters`<sup>Required</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParameters"></a>

```typescript
public readonly destinationVolumeParameters: NetappVolumeReplicationDestinationVolumeParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference">NetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.healthy"></a>

```typescript
public readonly healthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirrorState`<sup>Required</sup> <a name="mirrorState" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.mirrorState"></a>

```typescript
public readonly mirrorState: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeReplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference">NetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `transferStats`<sup>Required</sup> <a name="transferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.transferStats"></a>

```typescript
public readonly transferStats: NetappVolumeReplicationTransferStatsList;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList">NetappVolumeReplicationTransferStatsList</a>

---

##### `deleteDestinationVolumeInput`<sup>Optional</sup> <a name="deleteDestinationVolumeInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```typescript
public readonly deleteDestinationVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationVolumeParametersInput`<sup>Optional</sup> <a name="destinationVolumeParametersInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```typescript
public readonly destinationVolumeParametersInput: NetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `forceStoppingInput`<sup>Optional</sup> <a name="forceStoppingInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStoppingInput"></a>

```typescript
public readonly forceStoppingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicationEnabledInput`<sup>Optional</sup> <a name="replicationEnabledInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabledInput"></a>

```typescript
public readonly replicationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `waitForMirrorInput`<sup>Optional</sup> <a name="waitForMirrorInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirrorInput"></a>

```typescript
public readonly waitForMirrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteDestinationVolume`<sup>Required</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.deleteDestinationVolume"></a>

```typescript
public readonly deleteDestinationVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceStopping`<sup>Required</sup> <a name="forceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.forceStopping"></a>

```typescript
public readonly forceStopping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replicationEnabled`<sup>Required</sup> <a name="replicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationEnabled"></a>

```typescript
public readonly replicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `waitForMirror`<sup>Required</sup> <a name="waitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.waitForMirror"></a>

```typescript
public readonly waitForMirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeReplicationConfig <a name="NetappVolumeReplicationConfig" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

const netappVolumeReplicationConfig: netappVolumeReplication.NetappVolumeReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location">location</a></code> | <code>string</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName">volumeName</a></code> | <code>string</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description">description</a></code> | <code>string</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping">forceStopping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled">replicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror">waitForMirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | Replication resource state is independent of mirror_state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}

---

##### `deleteDestinationVolume`<sup>Optional</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```typescript
public readonly deleteDestinationVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `destinationVolumeParameters`<sup>Optional</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```typescript
public readonly destinationVolumeParameters: NetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}

---

##### `forceStopping`<sup>Optional</sup> <a name="forceStopping" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.forceStopping"></a>

```typescript
public readonly forceStopping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}.

---

##### `replicationEnabled`<sup>Optional</sup> <a name="replicationEnabled" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.replicationEnabled"></a>

```typescript
public readonly replicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeReplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}

---

##### `waitForMirror`<sup>Optional</sup> <a name="waitForMirror" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationConfig.property.waitForMirror"></a>

```typescript
public readonly waitForMirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}

---

### NetappVolumeReplicationDestinationVolumeParameters <a name="NetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

const netappVolumeReplicationDestinationVolumeParameters: netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool">storagePool</a></code> | <code>string</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description">description</a></code> | <code>string</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName">shareName</a></code> | <code>string</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId">volumeId</a></code> | <code>string</code> | Name for the destination volume to be created. |

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}

---

### NetappVolumeReplicationTimeouts <a name="NetappVolumeReplicationTimeouts" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

const netappVolumeReplicationTimeouts: netappVolumeReplication.NetappVolumeReplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}.

---

### NetappVolumeReplicationTransferStats <a name="NetappVolumeReplicationTransferStats" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

const netappVolumeReplicationTransferStats: netappVolumeReplication.NetappVolumeReplicationTransferStats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="NetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

new netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetVolumeId` <a name="resetVolumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```typescript
public resetVolumeId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationDestinationVolumeParameters">NetappVolumeReplicationDestinationVolumeParameters</a>

---


### NetappVolumeReplicationTimeoutsOutputReference <a name="NetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

new netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTimeouts">NetappVolumeReplicationTimeouts</a>

---


### NetappVolumeReplicationTransferStatsList <a name="NetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

new netappVolumeReplication.NetappVolumeReplicationTransferStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get"></a>

```typescript
public get(index: number): NetappVolumeReplicationTransferStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetappVolumeReplicationTransferStatsOutputReference <a name="NetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```typescript
import { netappVolumeReplication } from '@cdktf/provider-google'

new netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">lagDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">lastTransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">lastTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">lastTransferEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">lastTransferError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">totalTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">transferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lagDuration`<sup>Required</sup> <a name="lagDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```typescript
public readonly lagDuration: string;
```

- *Type:* string

---

##### `lastTransferBytes`<sup>Required</sup> <a name="lastTransferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```typescript
public readonly lastTransferBytes: string;
```

- *Type:* string

---

##### `lastTransferDuration`<sup>Required</sup> <a name="lastTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```typescript
public readonly lastTransferDuration: string;
```

- *Type:* string

---

##### `lastTransferEndTime`<sup>Required</sup> <a name="lastTransferEndTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```typescript
public readonly lastTransferEndTime: string;
```

- *Type:* string

---

##### `lastTransferError`<sup>Required</sup> <a name="lastTransferError" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```typescript
public readonly lastTransferError: string;
```

- *Type:* string

---

##### `totalTransferDuration`<sup>Required</sup> <a name="totalTransferDuration" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```typescript
public readonly totalTransferDuration: string;
```

- *Type:* string

---

##### `transferBytes`<sup>Required</sup> <a name="transferBytes" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```typescript
public readonly transferBytes: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeReplicationTransferStats;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeReplication.NetappVolumeReplicationTransferStats">NetappVolumeReplicationTransferStats</a>

---



