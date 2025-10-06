# `managedKafkaCluster` Submodule <a name="`managedKafkaCluster` Submodule" id="@cdktf/provider-google.managedKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaCluster <a name="ManagedKafkaCluster" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster google_managed_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaCluster(scope: Construct, id: string, config: ManagedKafkaClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig">ManagedKafkaClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig">ManagedKafkaClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig">putCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig">putGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig">putRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig">resetRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityConfig` <a name="putCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig"></a>

```typescript
public putCapacityConfig(value: ManagedKafkaClusterCapacityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `putGcpConfig` <a name="putGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig"></a>

```typescript
public putGcpConfig(value: ManagedKafkaClusterGcpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `putRebalanceConfig` <a name="putRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig"></a>

```typescript
public putRebalanceConfig(value: ManagedKafkaClusterRebalanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putRebalanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedKafkaClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig"></a>

```typescript
public putTlsConfig(value: ManagedKafkaClusterTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRebalanceConfig` <a name="resetRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetRebalanceConfig"></a>

```typescript
public resetRebalanceConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

managedKafkaCluster.ManagedKafkaCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

managedKafkaCluster.ManagedKafkaCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

managedKafkaCluster.ManagedKafkaCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig">rebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference">ManagedKafkaClusterTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput">capacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput">gcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput">rebalanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfig"></a>

```typescript
public readonly capacityConfig: ManagedKafkaClusterCapacityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference">ManagedKafkaClusterCapacityConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfig"></a>

```typescript
public readonly gcpConfig: ManagedKafkaClusterGcpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference">ManagedKafkaClusterGcpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rebalanceConfig`<sup>Required</sup> <a name="rebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfig"></a>

```typescript
public readonly rebalanceConfig: ManagedKafkaClusterRebalanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference">ManagedKafkaClusterRebalanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference">ManagedKafkaClusterTimeoutsOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: ManagedKafkaClusterTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference">ManagedKafkaClusterTlsConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `capacityConfigInput`<sup>Optional</sup> <a name="capacityConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.capacityConfigInput"></a>

```typescript
public readonly capacityConfigInput: ManagedKafkaClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `gcpConfigInput`<sup>Optional</sup> <a name="gcpConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.gcpConfigInput"></a>

```typescript
public readonly gcpConfigInput: ManagedKafkaClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rebalanceConfigInput`<sup>Optional</sup> <a name="rebalanceConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.rebalanceConfigInput"></a>

```typescript
public readonly rebalanceConfigInput: ManagedKafkaClusterRebalanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedKafkaClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: ManagedKafkaClusterTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaClusterCapacityConfig <a name="ManagedKafkaClusterCapacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterCapacityConfig: managedKafkaCluster.ManagedKafkaClusterCapacityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes">memoryBytes</a></code> | <code>string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount">vcpuCount</a></code> | <code>string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: string;
```

- *Type:* string

The memory to provision for the cluster in bytes.

The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#memory_bytes ManagedKafkaCluster#memory_bytes}

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig.property.vcpuCount"></a>

```typescript
public readonly vcpuCount: string;
```

- *Type:* string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#vcpu_count ManagedKafkaCluster#vcpu_count}

---

### ManagedKafkaClusterConfig <a name="ManagedKafkaClusterConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterConfig: managedKafkaCluster.ManagedKafkaClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID to use for the cluster, which will become the final component of the cluster's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig">rebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | rebalance_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.capacityConfig"></a>

```typescript
public readonly capacityConfig: ManagedKafkaClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#capacity_config ManagedKafkaCluster#capacity_config}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID to use for the cluster, which will become the final component of the cluster's name.

The ID must be 1-63 characters long, and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#cluster_id ManagedKafkaCluster#cluster_id}

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.gcpConfig"></a>

```typescript
public readonly gcpConfig: ManagedKafkaClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#gcp_config ManagedKafkaCluster#gcp_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#location ManagedKafkaCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#id ManagedKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#labels ManagedKafkaCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#project ManagedKafkaCluster#project}.

---

##### `rebalanceConfig`<sup>Optional</sup> <a name="rebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.rebalanceConfig"></a>

```typescript
public readonly rebalanceConfig: ManagedKafkaClusterRebalanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

rebalance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#rebalance_config ManagedKafkaCluster#rebalance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#timeouts ManagedKafkaCluster#timeouts}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: ManagedKafkaClusterTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#tls_config ManagedKafkaCluster#tls_config}

---

### ManagedKafkaClusterGcpConfig <a name="ManagedKafkaClusterGcpConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterGcpConfig: managedKafkaCluster.ManagedKafkaClusterGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS Key name to use for encryption. |

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.accessConfig"></a>

```typescript
public readonly accessConfig: ManagedKafkaClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#access_config ManagedKafkaCluster#access_config}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS Key name to use for encryption.

The key must be located in the same region as the cluster and cannot be changed. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#kms_key ManagedKafkaCluster#kms_key}

---

### ManagedKafkaClusterGcpConfigAccessConfig <a name="ManagedKafkaClusterGcpConfigAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterGcpConfigAccessConfig: managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs">networkConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | network_configs block. |

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: IResolvable | ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#network_configs ManagedKafkaCluster#network_configs}

---

### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterGcpConfigAccessConfigNetworkConfigs: managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet">subnet</a></code> | <code>string</code> | Name of the VPC subnet from which the cluster is accessible. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Name of the VPC subnet from which the cluster is accessible.

Both broker and bootstrap server IP addresses and DNS entries are automatically created in the subnet. There can only be one subnet per network, and the subnet must be located in the same region as the cluster. The project may differ. The name of the subnet must be in the format 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#subnet ManagedKafkaCluster#subnet}

---

### ManagedKafkaClusterRebalanceConfig <a name="ManagedKafkaClusterRebalanceConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterRebalanceConfig: managedKafkaCluster.ManagedKafkaClusterRebalanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode">mode</a></code> | <code>string</code> | The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#mode ManagedKafkaCluster#mode}

---

### ManagedKafkaClusterTimeouts <a name="ManagedKafkaClusterTimeouts" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterTimeouts: managedKafkaCluster.ManagedKafkaClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#create ManagedKafkaCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#delete ManagedKafkaCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#update ManagedKafkaCluster#update}.

---

### ManagedKafkaClusterTlsConfig <a name="ManagedKafkaClusterTlsConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterTlsConfig: managedKafkaCluster.ManagedKafkaClusterTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.sslPrincipalMappingRules">sslPrincipalMappingRules</a></code> | <code>string</code> | The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.trustConfig">trustConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | trust_config block. |

---

##### `sslPrincipalMappingRules`<sup>Optional</sup> <a name="sslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.sslPrincipalMappingRules"></a>

```typescript
public readonly sslPrincipalMappingRules: string;
```

- *Type:* string

The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs.

This field corresponds exactly to the ssl.principal.mapping.rules broker config and matches the format and syntax defined in the Apache Kafka documentation. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means that the default Kafka behavior is used. Example: 'RULE:^CN=(.?),OU=ServiceUsers.$/$1@example.com/,DEFAULT'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#ssl_principal_mapping_rules ManagedKafkaCluster#ssl_principal_mapping_rules}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig.property.trustConfig"></a>

```typescript
public readonly trustConfig: ManagedKafkaClusterTlsConfigTrustConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#trust_config ManagedKafkaCluster#trust_config}

---

### ManagedKafkaClusterTlsConfigTrustConfig <a name="ManagedKafkaClusterTlsConfigTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterTlsConfigTrustConfig: managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.property.casConfigs">casConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]</code> | cas_configs block. |

---

##### `casConfigs`<sup>Optional</sup> <a name="casConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig.property.casConfigs"></a>

```typescript
public readonly casConfigs: IResolvable | ManagedKafkaClusterTlsConfigTrustConfigCasConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]

cas_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#cas_configs ManagedKafkaCluster#cas_configs}

---

### ManagedKafkaClusterTlsConfigTrustConfigCasConfigs <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

const managedKafkaClusterTlsConfigTrustConfigCasConfigs: managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.property.caPool">caPool</a></code> | <code>string</code> | The name of the CA pool to pull CA certificates from. |

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

The name of the CA pool to pull CA certificates from.

The CA pool does not need to be in the same project or location as the Kafka cluster. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/caPools/CA_POOL_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/managed_kafka_cluster#ca_pool ManagedKafkaCluster#ca_pool}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaClusterCapacityConfigOutputReference <a name="ManagedKafkaClusterCapacityConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount">vcpuCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```typescript
public readonly memoryBytesInput: string;
```

- *Type:* string

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```typescript
public readonly vcpuCountInput: string;
```

- *Type:* string

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: string;
```

- *Type:* string

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```typescript
public readonly vcpuCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterCapacityConfig">ManagedKafkaClusterCapacityConfig</a>

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```typescript
public get(index: number): ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


### ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>

---


### ManagedKafkaClusterGcpConfigAccessConfigOutputReference <a name="ManagedKafkaClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">putNetworkConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkConfigs` <a name="putNetworkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```typescript
public putNetworkConfigs(value: IResolvable | ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">networkConfigs</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">networkConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `networkConfigsInput`<sup>Optional</sup> <a name="networkConfigsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```typescript
public readonly networkConfigsInput: IResolvable | ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---


### ManagedKafkaClusterGcpConfigOutputReference <a name="ManagedKafkaClusterGcpConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig"></a>

```typescript
public putAccessConfig(value: ManagedKafkaClusterGcpConfigAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: ManagedKafkaClusterGcpConfigAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfigOutputReference">ManagedKafkaClusterGcpConfigAccessConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: ManagedKafkaClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigAccessConfig">ManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterGcpConfig">ManagedKafkaClusterGcpConfig</a>

---


### ManagedKafkaClusterRebalanceConfigOutputReference <a name="ManagedKafkaClusterRebalanceConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterRebalanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterRebalanceConfig">ManagedKafkaClusterRebalanceConfig</a>

---


### ManagedKafkaClusterTimeoutsOutputReference <a name="ManagedKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTimeouts">ManagedKafkaClusterTimeouts</a>

---


### ManagedKafkaClusterTlsConfigOutputReference <a name="ManagedKafkaClusterTlsConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig">putTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetSslPrincipalMappingRules">resetSslPrincipalMappingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustConfig` <a name="putTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig"></a>

```typescript
public putTrustConfig(value: ManagedKafkaClusterTlsConfigTrustConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.putTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---

##### `resetSslPrincipalMappingRules` <a name="resetSslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetSslPrincipalMappingRules"></a>

```typescript
public resetSslPrincipalMappingRules(): void
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.resetTrustConfig"></a>

```typescript
public resetTrustConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfig">trustConfig</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference">ManagedKafkaClusterTlsConfigTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRulesInput">sslPrincipalMappingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfigInput">trustConfigInput</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRules">sslPrincipalMappingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfig"></a>

```typescript
public readonly trustConfig: ManagedKafkaClusterTlsConfigTrustConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference">ManagedKafkaClusterTlsConfigTrustConfigOutputReference</a>

---

##### `sslPrincipalMappingRulesInput`<sup>Optional</sup> <a name="sslPrincipalMappingRulesInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRulesInput"></a>

```typescript
public readonly sslPrincipalMappingRulesInput: string;
```

- *Type:* string

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.trustConfigInput"></a>

```typescript
public readonly trustConfigInput: ManagedKafkaClusterTlsConfigTrustConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---

##### `sslPrincipalMappingRules`<sup>Required</sup> <a name="sslPrincipalMappingRules" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.sslPrincipalMappingRules"></a>

```typescript
public readonly sslPrincipalMappingRules: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfig">ManagedKafkaClusterTlsConfig</a>

---


### ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get"></a>

```typescript
public get(index: number): ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaClusterTlsConfigTrustConfigCasConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]

---


### ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference <a name="ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPool">caPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPoolInput"></a>

```typescript
public readonly caPoolInput: string;
```

- *Type:* string

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaClusterTlsConfigTrustConfigCasConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>

---


### ManagedKafkaClusterTlsConfigTrustConfigOutputReference <a name="ManagedKafkaClusterTlsConfigTrustConfigOutputReference" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer"></a>

```typescript
import { managedKafkaCluster } from '@cdktf/provider-google'

new managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs">putCasConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resetCasConfigs">resetCasConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCasConfigs` <a name="putCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs"></a>

```typescript
public putCasConfigs(value: IResolvable | ManagedKafkaClusterTlsConfigTrustConfigCasConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.putCasConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]

---

##### `resetCasConfigs` <a name="resetCasConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.resetCasConfigs"></a>

```typescript
public resetCasConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigs">casConfigs</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList">ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigsInput">casConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `casConfigs`<sup>Required</sup> <a name="casConfigs" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigs"></a>

```typescript
public readonly casConfigs: ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList">ManagedKafkaClusterTlsConfigTrustConfigCasConfigsList</a>

---

##### `casConfigsInput`<sup>Optional</sup> <a name="casConfigsInput" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.casConfigsInput"></a>

```typescript
public readonly casConfigsInput: IResolvable | ManagedKafkaClusterTlsConfigTrustConfigCasConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigCasConfigs">ManagedKafkaClusterTlsConfigTrustConfigCasConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaClusterTlsConfigTrustConfig;
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaCluster.ManagedKafkaClusterTlsConfigTrustConfig">ManagedKafkaClusterTlsConfigTrustConfig</a>

---



