# `containerNodePool` Submodule <a name="`containerNodePool` Submodule" id="@cdktf/provider-google.containerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerNodePool <a name="ContainerNodePool" id="@cdktf/provider-google.containerNodePool.ContainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool google_container_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePool(scope: Construct, id: string, config: ContainerNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig">ContainerNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig">ContainerNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy">putPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings">putUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling">resetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount">resetInitialNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations">resetNodeLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy">resetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings">resetUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling"></a>

```typescript
public putAutoscaling(value: ContainerNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement"></a>

```typescript
public putManagement(value: ContainerNodePoolManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: ContainerNodePoolNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig"></a>

```typescript
public putNodeConfig(value: ContainerNodePoolNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---

##### `putPlacementPolicy` <a name="putPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy"></a>

```typescript
public putPlacementPolicy(value: ContainerNodePoolPlacementPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

---

##### `putUpgradeSettings` <a name="putUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings"></a>

```typescript
public putUpgradeSettings(value: ContainerNodePoolUpgradeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---

##### `resetAutoscaling` <a name="resetAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetAutoscaling"></a>

```typescript
public resetAutoscaling(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialNodeCount` <a name="resetInitialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetInitialNodeCount"></a>

```typescript
public resetInitialNodeCount(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetNodeLocations` <a name="resetNodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetNodeLocations"></a>

```typescript
public resetNodeLocations(): void
```

##### `resetPlacementPolicy` <a name="resetPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetPlacementPolicy"></a>

```typescript
public resetPlacementPolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradeSettings` <a name="resetUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetUpgradeSettings"></a>

```typescript
public resetUpgradeSettings(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

containerNodePool.ContainerNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

containerNodePool.ContainerNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

containerNodePool.ContainerNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

containerNodePool.ContainerNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls">instanceGroupUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls">managedInstanceGroupUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy">placementPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput">initialNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput">nodeLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput">placementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput">upgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount">initialNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations">nodeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscaling"></a>

```typescript
public readonly autoscaling: ContainerNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference">ContainerNodePoolAutoscalingOutputReference</a>

---

##### `instanceGroupUrls`<sup>Required</sup> <a name="instanceGroupUrls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.instanceGroupUrls"></a>

```typescript
public readonly instanceGroupUrls: string[];
```

- *Type:* string[]

---

##### `managedInstanceGroupUrls`<sup>Required</sup> <a name="managedInstanceGroupUrls" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managedInstanceGroupUrls"></a>

```typescript
public readonly managedInstanceGroupUrls: string[];
```

- *Type:* string[]

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.management"></a>

```typescript
public readonly management: ContainerNodePoolManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference">ContainerNodePoolManagementOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfig"></a>

```typescript
public readonly networkConfig: ContainerNodePoolNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference">ContainerNodePoolNetworkConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ContainerNodePoolNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference">ContainerNodePoolNodeConfigOutputReference</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `placementPolicy`<sup>Required</sup> <a name="placementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: ContainerNodePoolPlacementPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference">ContainerNodePoolPlacementPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference">ContainerNodePoolTimeoutsOutputReference</a>

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettings"></a>

```typescript
public readonly upgradeSettings: ContainerNodePoolUpgradeSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference">ContainerNodePoolUpgradeSettingsOutputReference</a>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.autoscalingInput"></a>

```typescript
public readonly autoscalingInput: ContainerNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialNodeCountInput`<sup>Optional</sup> <a name="initialNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCountInput"></a>

```typescript
public readonly initialNodeCountInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.managementInput"></a>

```typescript
public readonly managementInput: ContainerNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: ContainerNodePoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: ContainerNodePoolNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeLocationsInput`<sup>Optional</sup> <a name="nodeLocationsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocationsInput"></a>

```typescript
public readonly nodeLocationsInput: string[];
```

- *Type:* string[]

---

##### `placementPolicyInput`<sup>Optional</sup> <a name="placementPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.placementPolicyInput"></a>

```typescript
public readonly placementPolicyInput: ContainerNodePoolPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

---

##### `upgradeSettingsInput`<sup>Optional</sup> <a name="upgradeSettingsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.upgradeSettingsInput"></a>

```typescript
public readonly upgradeSettingsInput: ContainerNodePoolUpgradeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.initialNodeCount"></a>

```typescript
public readonly initialNodeCount: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeLocations`<sup>Required</sup> <a name="nodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.nodeLocations"></a>

```typescript
public readonly nodeLocations: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerNodePool.ContainerNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerNodePoolAutoscaling <a name="ContainerNodePoolAutoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolAutoscaling: containerNodePool.ContainerNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy">locationPolicy</a></code> | <code>string</code> | Location policy specifies the algorithm used when scaling-up the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Maximum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Minimum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount">totalMaxNodeCount</a></code> | <code>number</code> | Maximum number of all nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount">totalMinNodeCount</a></code> | <code>number</code> | Minimum number of all nodes in the node pool. |

---

##### `locationPolicy`<sup>Optional</sup> <a name="locationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.locationPolicy"></a>

```typescript
public readonly locationPolicy: string;
```

- *Type:* string

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#location_policy ContainerNodePool#location_policy}

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_node_count ContainerNodePool#max_node_count}

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#min_node_count ContainerNodePool#min_node_count}

---

##### `totalMaxNodeCount`<sup>Optional</sup> <a name="totalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMaxNodeCount"></a>

```typescript
public readonly totalMaxNodeCount: number;
```

- *Type:* number

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#total_max_node_count ContainerNodePool#total_max_node_count}

---

##### `totalMinNodeCount`<sup>Optional</sup> <a name="totalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling.property.totalMinNodeCount"></a>

```typescript
public readonly totalMinNodeCount: number;
```

- *Type:* number

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#total_min_node_count ContainerNodePool#total_min_node_count}

---

### ContainerNodePoolConfig <a name="ContainerNodePoolConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolConfig: containerNodePool.ContainerNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster">cluster</a></code> | <code>string</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#id ContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount">initialNodeCount</a></code> | <code>number</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name">name</a></code> | <code>string</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations">nodeLocations</a></code> | <code>string[]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy">placementPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version">version</a></code> | <code>string</code> | The Kubernetes version for the nodes in this pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#cluster ContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.autoscaling"></a>

```typescript
public readonly autoscaling: ContainerNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#autoscaling ContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#id ContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialNodeCount`<sup>Optional</sup> <a name="initialNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.initialNodeCount"></a>

```typescript
public readonly initialNodeCount: number;
```

- *Type:* number

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#initial_node_count ContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#location ContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.management"></a>

```typescript
public readonly management: ContainerNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#management ContainerNodePool#management}

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_pods_per_node ContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#name ContainerNodePool#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#name_prefix ContainerNodePool#name_prefix}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: ContainerNodePoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#network_config ContainerNodePool#network_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ContainerNodePoolNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_config ContainerNodePool#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_count ContainerNodePool#node_count}

---

##### `nodeLocations`<sup>Optional</sup> <a name="nodeLocations" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.nodeLocations"></a>

```typescript
public readonly nodeLocations: string[];
```

- *Type:* string[]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_locations ContainerNodePool#node_locations}

---

##### `placementPolicy`<sup>Optional</sup> <a name="placementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: ContainerNodePoolPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#placement_policy ContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#project ContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#timeouts ContainerNodePool#timeouts}

---

##### `upgradeSettings`<sup>Optional</sup> <a name="upgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.upgradeSettings"></a>

```typescript
public readonly upgradeSettings: ContainerNodePoolUpgradeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#upgrade_settings ContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#version ContainerNodePool#version}

---

### ContainerNodePoolManagement <a name="ContainerNodePoolManagement" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolManagement: containerNodePool.ContainerNodePoolManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the nodes will be automatically repaired. Enabled by default. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the nodes will be automatically upgraded. Enabled by default. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the nodes will be automatically repaired. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#auto_repair ContainerNodePool#auto_repair}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the nodes will be automatically upgraded. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#auto_upgrade ContainerNodePool#auto_upgrade}

---

### ContainerNodePoolNetworkConfig <a name="ContainerNodePoolNetworkConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNetworkConfig: containerNodePool.ContainerNodePoolNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange">createPodRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to create a new range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes">enablePrivateNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether nodes have internal IP addresses only. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig">podCidrOverprovisionConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | pod_cidr_overprovision_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock">podIpv4CidrBlock</a></code> | <code>string</code> | The IP address range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange">podRange</a></code> | <code>string</code> | The ID of the secondary range for pod IPs. |

---

##### `createPodRange`<sup>Optional</sup> <a name="createPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.createPodRange"></a>

```typescript
public readonly createPodRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#create_pod_range ContainerNodePool#create_pod_range}

---

##### `enablePrivateNodes`<sup>Optional</sup> <a name="enablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.enablePrivateNodes"></a>

```typescript
public readonly enablePrivateNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enable_private_nodes ContainerNodePool#enable_private_nodes}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: ContainerNodePoolNetworkConfigNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#network_performance_config ContainerNodePool#network_performance_config}

---

##### `podCidrOverprovisionConfig`<sup>Optional</sup> <a name="podCidrOverprovisionConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig"></a>

```typescript
public readonly podCidrOverprovisionConfig: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

pod_cidr_overprovision_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#pod_cidr_overprovision_config ContainerNodePool#pod_cidr_overprovision_config}

---

##### `podIpv4CidrBlock`<sup>Optional</sup> <a name="podIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podIpv4CidrBlock"></a>

```typescript
public readonly podIpv4CidrBlock: string;
```

- *Type:* string

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#pod_ipv4_cidr_block ContainerNodePool#pod_ipv4_cidr_block}

---

##### `podRange`<sup>Optional</sup> <a name="podRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig.property.podRange"></a>

```typescript
public readonly podRange: string;
```

- *Type:* string

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#pod_range ContainerNodePool#pod_range}

---

### ContainerNodePoolNetworkConfigNetworkPerformanceConfig <a name="ContainerNodePoolNetworkConfigNetworkPerformanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNetworkConfigNetworkPerformanceConfig: containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | Specifies the total network bandwidth tier for the NodePool. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

Specifies the total network bandwidth tier for the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#total_egress_bandwidth_tier ContainerNodePool#total_egress_bandwidth_tier}

---

### ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig <a name="ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNetworkConfigPodCidrOverprovisionConfig: containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#disabled ContainerNodePool#disabled}. |

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#disabled ContainerNodePool#disabled}.

---

### ContainerNodePoolNodeConfig <a name="ContainerNodePoolNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfig: containerNodePool.ContainerNodePoolNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey">bootDiskKmsKey</a></code> | <code>string</code> | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.confidentialNodes">confidentialNodes</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a></code> | confidential_nodes block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType">diskType</a></code> | <code>string</code> | Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig">ephemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | ephemeral_storage_local_ssd_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.fastSocket">fastSocket</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a></code> | fast_socket block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig">gcfsConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | gcfs_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]</code> | List of the type and count of accelerator cards attached to the instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | gvnic block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a></code> | host_maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType">imageType</a></code> | <code>string</code> | The image type to use for this node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig">linuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | linux_node_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig">localNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | local_nvme_ssd_block_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | The number of local SSD disks to be attached to the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant">loggingVariant</a></code> | <code>string</code> | Type of logging agent that is used as the default value for node pools in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType">machineType</a></code> | <code>string</code> | The name of a Google Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata key/value pairs assigned to instances in the cluster. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup">nodeGroup</a></code> | <code>string</code> | Setting this field will assign instances of this pool to run on the specified node group. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The set of Google API scopes to be made available on all of the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels">resourceLabels</a></code> | <code>{[ key: string ]: string}</code> | The GCE resource labels (a map of key/value pairs) to be applied to the node pool. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.soleTenantConfig">soleTenantConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a></code> | sole_tenant_config block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot">spot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the nodes are created as spot VM instances. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of instance tags applied to all nodes. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint">taint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]</code> | taint block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig">workloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | workload_metadata_config block. |

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: ContainerNodePoolNodeConfigAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#advanced_machine_features ContainerNodePool#advanced_machine_features}

---

##### `bootDiskKmsKey`<sup>Optional</sup> <a name="bootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.bootDiskKmsKey"></a>

```typescript
public readonly bootDiskKmsKey: string;
```

- *Type:* string

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#boot_disk_kms_key ContainerNodePool#boot_disk_kms_key}

---

##### `confidentialNodes`<sup>Optional</sup> <a name="confidentialNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.confidentialNodes"></a>

```typescript
public readonly confidentialNodes: ContainerNodePoolNodeConfigConfidentialNodes;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a>

confidential_nodes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#confidential_nodes ContainerNodePool#confidential_nodes}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#disk_size_gb ContainerNodePool#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#disk_type ContainerNodePool#disk_type}

---

##### `ephemeralStorageLocalSsdConfig`<sup>Optional</sup> <a name="ephemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig"></a>

```typescript
public readonly ephemeralStorageLocalSsdConfig: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

ephemeral_storage_local_ssd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#ephemeral_storage_local_ssd_config ContainerNodePool#ephemeral_storage_local_ssd_config}

---

##### `fastSocket`<sup>Optional</sup> <a name="fastSocket" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.fastSocket"></a>

```typescript
public readonly fastSocket: ContainerNodePoolNodeConfigFastSocket;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a>

fast_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#fast_socket ContainerNodePool#fast_socket}

---

##### `gcfsConfig`<sup>Optional</sup> <a name="gcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gcfsConfig"></a>

```typescript
public readonly gcfsConfig: ContainerNodePoolNodeConfigGcfsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gcfs_config ContainerNodePool#gcfs_config}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: IResolvable | ContainerNodePoolNodeConfigGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#guest_accelerator ContainerNodePool#guest_accelerator}

---

##### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.gvnic"></a>

```typescript
public readonly gvnic: ContainerNodePoolNodeConfigGvnic;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gvnic ContainerNodePool#gvnic}

---

##### `hostMaintenancePolicy`<sup>Optional</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.hostMaintenancePolicy"></a>

```typescript
public readonly hostMaintenancePolicy: ContainerNodePoolNodeConfigHostMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a>

host_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#host_maintenance_policy ContainerNodePool#host_maintenance_policy}

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#image_type ContainerNodePool#image_type}

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: ContainerNodePoolNodeConfigKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#kubelet_config ContainerNodePool#kubelet_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#labels ContainerNodePool#labels}

---

##### `linuxNodeConfig`<sup>Optional</sup> <a name="linuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.linuxNodeConfig"></a>

```typescript
public readonly linuxNodeConfig: ContainerNodePoolNodeConfigLinuxNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#linux_node_config ContainerNodePool#linux_node_config}

---

##### `localNvmeSsdBlockConfig`<sup>Optional</sup> <a name="localNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig"></a>

```typescript
public readonly localNvmeSsdBlockConfig: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#local_nvme_ssd_block_config ContainerNodePool#local_nvme_ssd_block_config}

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

##### `loggingVariant`<sup>Optional</sup> <a name="loggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.loggingVariant"></a>

```typescript
public readonly loggingVariant: string;
```

- *Type:* string

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#logging_variant ContainerNodePool#logging_variant}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#machine_type ContainerNodePool#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#metadata ContainerNodePool#metadata}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#min_cpu_platform ContainerNodePool#min_cpu_platform}

---

##### `nodeGroup`<sup>Optional</sup> <a name="nodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.nodeGroup"></a>

```typescript
public readonly nodeGroup: string;
```

- *Type:* string

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_group ContainerNodePool#node_group}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#oauth_scopes ContainerNodePool#oauth_scopes}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#preemptible ContainerNodePool#preemptible}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: ContainerNodePoolNodeConfigReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#reservation_affinity ContainerNodePool#reservation_affinity}

---

##### `resourceLabels`<sup>Optional</sup> <a name="resourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.resourceLabels"></a>

```typescript
public readonly resourceLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#resource_labels ContainerNodePool#resource_labels}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#service_account ContainerNodePool#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: ContainerNodePoolNodeConfigShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#shielded_instance_config ContainerNodePool#shielded_instance_config}

---

##### `soleTenantConfig`<sup>Optional</sup> <a name="soleTenantConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.soleTenantConfig"></a>

```typescript
public readonly soleTenantConfig: ContainerNodePoolNodeConfigSoleTenantConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a>

sole_tenant_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#sole_tenant_config ContainerNodePool#sole_tenant_config}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.spot"></a>

```typescript
public readonly spot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#spot ContainerNodePool#spot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#tags ContainerNodePool#tags}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.taint"></a>

```typescript
public readonly taint: IResolvable | ContainerNodePoolNodeConfigTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#taint ContainerNodePool#taint}

---

##### `workloadMetadataConfig`<sup>Optional</sup> <a name="workloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig.property.workloadMetadataConfig"></a>

```typescript
public readonly workloadMetadataConfig: ContainerNodePoolNodeConfigWorkloadMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#workload_metadata_config ContainerNodePool#workload_metadata_config}

---

### ContainerNodePoolNodeConfigAdvancedMachineFeatures <a name="ContainerNodePoolNodeConfigAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigAdvancedMachineFeatures: containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | The number of threads per physical core. |

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#threads_per_core ContainerNodePool#threads_per_core}

---

### ContainerNodePoolNodeConfigConfidentialNodes <a name="ContainerNodePoolNodeConfigConfidentialNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigConfidentialNodes: containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Confidential Nodes feature is enabled for all nodes in this pool. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Confidential Nodes feature is enabled for all nodes in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigEffectiveTaints <a name="ContainerNodePoolNodeConfigEffectiveTaints" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaints.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigEffectiveTaints: containerNodePool.ContainerNodePoolNodeConfigEffectiveTaints = { ... }
```


### ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig <a name="ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigEphemeralStorageLocalSsdConfig: containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

### ContainerNodePoolNodeConfigFastSocket <a name="ContainerNodePoolNodeConfigFastSocket" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigFastSocket: containerNodePool.ContainerNodePoolNodeConfigFastSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not NCCL Fast Socket is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not NCCL Fast Socket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigGcfsConfig <a name="ContainerNodePoolNodeConfigGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigGcfsConfig: containerNodePool.ContainerNodePoolNodeConfigGcfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not GCFS is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigGuestAccelerator <a name="ContainerNodePoolNodeConfigGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigGuestAccelerator: containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#count ContainerNodePool#count}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuDriverInstallationConfig">gpuDriverInstallationConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_driver_installation_config ContainerNodePool#gpu_driver_installation_config}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize">gpuPartitionSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig">gpuSharingConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#type ContainerNodePool#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#count ContainerNodePool#count}.

---

##### `gpuDriverInstallationConfig`<sup>Optional</sup> <a name="gpuDriverInstallationConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuDriverInstallationConfig"></a>

```typescript
public readonly gpuDriverInstallationConfig: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_driver_installation_config ContainerNodePool#gpu_driver_installation_config}.

---

##### `gpuPartitionSize`<sup>Optional</sup> <a name="gpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize"></a>

```typescript
public readonly gpuPartitionSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_partition_size ContainerNodePool#gpu_partition_size}.

---

##### `gpuSharingConfig`<sup>Optional</sup> <a name="gpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig"></a>

```typescript
public readonly gpuSharingConfig: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_sharing_config ContainerNodePool#gpu_sharing_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#type ContainerNodePool#type}.

---

### ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig: containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.property.gpuDriverVersion">gpuDriverVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_driver_version ContainerNodePool#gpu_driver_version}. |

---

##### `gpuDriverVersion`<sup>Optional</sup> <a name="gpuDriverVersion" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.property.gpuDriverVersion"></a>

```typescript
public readonly gpuDriverVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_driver_version ContainerNodePool#gpu_driver_version}.

---

### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig: containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy">gpuSharingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu">maxSharedClientsPerGpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}. |

---

##### `gpuSharingStrategy`<sup>Optional</sup> <a name="gpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy"></a>

```typescript
public readonly gpuSharingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#gpu_sharing_strategy ContainerNodePool#gpu_sharing_strategy}.

---

##### `maxSharedClientsPerGpu`<sup>Optional</sup> <a name="maxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu"></a>

```typescript
public readonly maxSharedClientsPerGpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_shared_clients_per_gpu ContainerNodePool#max_shared_clients_per_gpu}.

---

### ContainerNodePoolNodeConfigGvnic <a name="ContainerNodePoolNodeConfigGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigGvnic: containerNodePool.ContainerNodePoolNodeConfigGvnic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not gvnic is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enabled ContainerNodePool#enabled}

---

### ContainerNodePoolNodeConfigHostMaintenancePolicy <a name="ContainerNodePoolNodeConfigHostMaintenancePolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigHostMaintenancePolicy: containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | . |

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#maintenance_interval ContainerNodePool#maintenance_interval}

---

### ContainerNodePoolNodeConfigKubeletConfig <a name="ContainerNodePoolNodeConfigKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigKubeletConfig: containerNodePool.ContainerNodePoolNodeConfigKubeletConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | Control the CPU management policy on the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable CPU CFS quota enforcement for containers that specify CPU limits. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | Set the CPU CFS quota period value 'cpu.cfs_period_us'. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | Controls the maximum number of processes allowed to run in a pod. |

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#cpu_manager_policy ContainerNodePool#cpu_manager_policy}

---

##### `cpuCfsQuota`<sup>Optional</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#cpu_cfs_quota ContainerNodePool#cpu_cfs_quota}

---

##### `cpuCfsQuotaPeriod`<sup>Optional</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#cpu_cfs_quota_period ContainerNodePool#cpu_cfs_quota_period}

---

##### `podPidsLimit`<sup>Optional</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#pod_pids_limit ContainerNodePool#pod_pids_limit}

---

### ContainerNodePoolNodeConfigLinuxNodeConfig <a name="ContainerNodePoolNodeConfigLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigLinuxNodeConfig: containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.cgroupMode">cgroupMode</a></code> | <code>string</code> | cgroupMode specifies the cgroup mode to be used on the node. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls">sysctls</a></code> | <code>{[ key: string ]: string}</code> | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. |

---

##### `cgroupMode`<sup>Optional</sup> <a name="cgroupMode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.cgroupMode"></a>

```typescript
public readonly cgroupMode: string;
```

- *Type:* string

cgroupMode specifies the cgroup mode to be used on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#cgroup_mode ContainerNodePool#cgroup_mode}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls"></a>

```typescript
public readonly sysctls: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#sysctls ContainerNodePool#sysctls}

---

### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigLocalNvmeSsdBlockConfig: containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | Number of raw-block local NVMe SSD disks to be attached to the node. |

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#local_ssd_count ContainerNodePool#local_ssd_count}

---

### ContainerNodePoolNodeConfigReservationAffinity <a name="ContainerNodePoolNodeConfigReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigReservationAffinity: containerNodePool.ContainerNodePoolNodeConfigReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | Corresponds to the type of reservation consumption. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key">key</a></code> | <code>string</code> | The label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values">values</a></code> | <code>string[]</code> | The label values of the reservation resource. |

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#consume_reservation_type ContainerNodePool#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#key ContainerNodePool#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#values ContainerNodePool#values}

---

### ContainerNodePoolNodeConfigShieldedInstanceConfig <a name="ContainerNodePoolNodeConfigShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigShieldedInstanceConfig: containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#enable_secure_boot ContainerNodePool#enable_secure_boot}

---

### ContainerNodePoolNodeConfigSoleTenantConfig <a name="ContainerNodePoolNodeConfigSoleTenantConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigSoleTenantConfig: containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig.property.nodeAffinity">nodeAffinity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]</code> | node_affinity block. |

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: IResolvable | ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_affinity ContainerNodePool#node_affinity}

---

### ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity <a name="ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigSoleTenantConfigNodeAffinity: containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.key">key</a></code> | <code>string</code> | . |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.operator">operator</a></code> | <code>string</code> | . |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.values">values</a></code> | <code>string[]</code> | . |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#key ContainerNodePool#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#operator ContainerNodePool#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#values ContainerNodePool#values}

---

### ContainerNodePoolNodeConfigTaint <a name="ContainerNodePoolNodeConfigTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigTaint: containerNodePool.ContainerNodePoolNodeConfigTaint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect">effect</a></code> | <code>string</code> | Effect for taint. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key">key</a></code> | <code>string</code> | Key for taint. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value">value</a></code> | <code>string</code> | Value for taint. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Effect for taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#effect ContainerNodePool#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key for taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#key ContainerNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#value ContainerNodePool#value}

---

### ContainerNodePoolNodeConfigWorkloadMetadataConfig <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolNodeConfigWorkloadMetadataConfig: containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode">mode</a></code> | <code>string</code> | Mode is the configuration for how to expose metadata to workloads running on the node. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#mode ContainerNodePool#mode}

---

### ContainerNodePoolPlacementPolicy <a name="ContainerNodePoolPlacementPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolPlacementPolicy: containerNodePool.ContainerNodePoolPlacementPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type">type</a></code> | <code>string</code> | Type defines the type of placement policy. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.policyName">policyName</a></code> | <code>string</code> | If set, refers to the name of a custom resource policy supplied by the user. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.tpuTopology">tpuTopology</a></code> | <code>string</code> | TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#type ContainerNodePool#type}

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

If set, refers to the name of a custom resource policy supplied by the user.

The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#policy_name ContainerNodePool#policy_name}

---

##### `tpuTopology`<sup>Optional</sup> <a name="tpuTopology" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy.property.tpuTopology"></a>

```typescript
public readonly tpuTopology: string;
```

- *Type:* string

TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#tpu_topology ContainerNodePool#tpu_topology}

---

### ContainerNodePoolTimeouts <a name="ContainerNodePoolTimeouts" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolTimeouts: containerNodePool.ContainerNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#create ContainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#delete ContainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#update ContainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#create ContainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#delete ContainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#update ContainerNodePool#update}.

---

### ContainerNodePoolUpgradeSettings <a name="ContainerNodePoolUpgradeSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolUpgradeSettings: containerNodePool.ContainerNodePoolUpgradeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings">blueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | blue_green_settings block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge">maxSurge</a></code> | <code>number</code> | The number of additional nodes that can be added to the node pool during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | The number of nodes that can be simultaneously unavailable during an upgrade. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy">strategy</a></code> | <code>string</code> | Update strategy for the given nodepool. |

---

##### `blueGreenSettings`<sup>Optional</sup> <a name="blueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.blueGreenSettings"></a>

```typescript
public readonly blueGreenSettings: ContainerNodePoolUpgradeSettingsBlueGreenSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#blue_green_settings ContainerNodePool#blue_green_settings}

---

##### `maxSurge`<sup>Optional</sup> <a name="maxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_surge ContainerNodePool#max_surge}

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#max_unavailable ContainerNodePool#max_unavailable}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#strategy ContainerNodePool#strategy}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettings <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolUpgradeSettingsBlueGreenSettings: containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy">standardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | standard_rollout_policy block. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration">nodePoolSoakDuration</a></code> | <code>string</code> | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. |

---

##### `standardRolloutPolicy`<sup>Required</sup> <a name="standardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy"></a>

```typescript
public readonly standardRolloutPolicy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#standard_rollout_policy ContainerNodePool#standard_rollout_policy}

---

##### `nodePoolSoakDuration`<sup>Optional</sup> <a name="nodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration"></a>

```typescript
public readonly nodePoolSoakDuration: string;
```

- *Type:* string

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#node_pool_soak_duration ContainerNodePool#node_pool_soak_duration}

---

### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

const containerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy: containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount">batchNodeCount</a></code> | <code>number</code> | Number of blue nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage">batchPercentage</a></code> | <code>number</code> | Percentage of the blue pool nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration">batchSoakDuration</a></code> | <code>string</code> | Soak time after each batch gets drained. |

---

##### `batchNodeCount`<sup>Optional</sup> <a name="batchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount"></a>

```typescript
public readonly batchNodeCount: number;
```

- *Type:* number

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#batch_node_count ContainerNodePool#batch_node_count}

---

##### `batchPercentage`<sup>Optional</sup> <a name="batchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage"></a>

```typescript
public readonly batchPercentage: number;
```

- *Type:* number

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#batch_percentage ContainerNodePool#batch_percentage}

---

##### `batchSoakDuration`<sup>Optional</sup> <a name="batchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration"></a>

```typescript
public readonly batchSoakDuration: string;
```

- *Type:* string

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/container_node_pool#batch_soak_duration ContainerNodePool#batch_soak_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerNodePoolAutoscalingOutputReference <a name="ContainerNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy">resetLocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount">resetTotalMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount">resetTotalMinNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationPolicy` <a name="resetLocationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetLocationPolicy"></a>

```typescript
public resetLocationPolicy(): void
```

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount"></a>

```typescript
public resetMaxNodeCount(): void
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetMinNodeCount"></a>

```typescript
public resetMinNodeCount(): void
```

##### `resetTotalMaxNodeCount` <a name="resetTotalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount"></a>

```typescript
public resetTotalMaxNodeCount(): void
```

##### `resetTotalMinNodeCount` <a name="resetTotalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount"></a>

```typescript
public resetTotalMinNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput">locationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput">totalMaxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput">totalMinNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy">locationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount">totalMaxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount">totalMinNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationPolicyInput`<sup>Optional</sup> <a name="locationPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput"></a>

```typescript
public readonly locationPolicyInput: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `totalMaxNodeCountInput`<sup>Optional</sup> <a name="totalMaxNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput"></a>

```typescript
public readonly totalMaxNodeCountInput: number;
```

- *Type:* number

---

##### `totalMinNodeCountInput`<sup>Optional</sup> <a name="totalMinNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput"></a>

```typescript
public readonly totalMinNodeCountInput: number;
```

- *Type:* number

---

##### `locationPolicy`<sup>Required</sup> <a name="locationPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.locationPolicy"></a>

```typescript
public readonly locationPolicy: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `totalMaxNodeCount`<sup>Required</sup> <a name="totalMaxNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount"></a>

```typescript
public readonly totalMaxNodeCount: number;
```

- *Type:* number

---

##### `totalMinNodeCount`<sup>Required</sup> <a name="totalMinNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount"></a>

```typescript
public readonly totalMinNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolAutoscaling">ContainerNodePoolAutoscaling</a>

---


### ContainerNodePoolManagementOutputReference <a name="ContainerNodePoolManagementOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoRepair"></a>

```typescript
public resetAutoRepair(): void
```

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.resetAutoUpgrade"></a>

```typescript
public resetAutoUpgrade(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepairInput"></a>

```typescript
public readonly autoRepairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgradeInput"></a>

```typescript
public readonly autoUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolManagement">ContainerNodePoolManagement</a>

---


### ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference <a name="ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```typescript
public readonly totalEgressBandwidthTierInput: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNetworkConfigNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a>

---


### ContainerNodePoolNetworkConfigOutputReference <a name="ContainerNodePoolNetworkConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig">putPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange">resetCreatePodRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes">resetEnablePrivateNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig">resetPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock">resetPodIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange">resetPodRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putNetworkPerformanceConfig"></a>

```typescript
public putNetworkPerformanceConfig(value: ContainerNodePoolNetworkConfigNetworkPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a>

---

##### `putPodCidrOverprovisionConfig` <a name="putPodCidrOverprovisionConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig"></a>

```typescript
public putPodCidrOverprovisionConfig(value: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---

##### `resetCreatePodRange` <a name="resetCreatePodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange"></a>

```typescript
public resetCreatePodRange(): void
```

##### `resetEnablePrivateNodes` <a name="resetEnablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes"></a>

```typescript
public resetEnablePrivateNodes(): void
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetNetworkPerformanceConfig"></a>

```typescript
public resetNetworkPerformanceConfig(): void
```

##### `resetPodCidrOverprovisionConfig` <a name="resetPodCidrOverprovisionConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig"></a>

```typescript
public resetPodCidrOverprovisionConfig(): void
```

##### `resetPodIpv4CidrBlock` <a name="resetPodIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock"></a>

```typescript
public resetPodIpv4CidrBlock(): void
```

##### `resetPodRange` <a name="resetPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.resetPodRange"></a>

```typescript
public resetPodRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference">ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig">podCidrOverprovisionConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput">createPodRangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput">enablePrivateNodesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput">podCidrOverprovisionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput">podIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput">podRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange">createPodRange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes">enablePrivateNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock">podIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange">podRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference">ContainerNodePoolNetworkConfigNetworkPerformanceConfigOutputReference</a>

---

##### `podCidrOverprovisionConfig`<sup>Required</sup> <a name="podCidrOverprovisionConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig"></a>

```typescript
public readonly podCidrOverprovisionConfig: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a>

---

##### `createPodRangeInput`<sup>Optional</sup> <a name="createPodRangeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput"></a>

```typescript
public readonly createPodRangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivateNodesInput`<sup>Optional</sup> <a name="enablePrivateNodesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput"></a>

```typescript
public readonly enablePrivateNodesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.networkPerformanceConfigInput"></a>

```typescript
public readonly networkPerformanceConfigInput: ContainerNodePoolNetworkConfigNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigNetworkPerformanceConfig">ContainerNodePoolNetworkConfigNetworkPerformanceConfig</a>

---

##### `podCidrOverprovisionConfigInput`<sup>Optional</sup> <a name="podCidrOverprovisionConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput"></a>

```typescript
public readonly podCidrOverprovisionConfigInput: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---

##### `podIpv4CidrBlockInput`<sup>Optional</sup> <a name="podIpv4CidrBlockInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput"></a>

```typescript
public readonly podIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `podRangeInput`<sup>Optional</sup> <a name="podRangeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRangeInput"></a>

```typescript
public readonly podRangeInput: string;
```

- *Type:* string

---

##### `createPodRange`<sup>Required</sup> <a name="createPodRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.createPodRange"></a>

```typescript
public readonly createPodRange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivateNodes`<sup>Required</sup> <a name="enablePrivateNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes"></a>

```typescript
public readonly enablePrivateNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podIpv4CidrBlock`<sup>Required</sup> <a name="podIpv4CidrBlock" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock"></a>

```typescript
public readonly podIpv4CidrBlock: string;
```

- *Type:* string

---

##### `podRange`<sup>Required</sup> <a name="podRange" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.podRange"></a>

```typescript
public readonly podRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfig">ContainerNodePoolNetworkConfig</a>

---


### ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference <a name="ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">ContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---


### ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference <a name="ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---


### ContainerNodePoolNodeConfigConfidentialNodesOutputReference <a name="ContainerNodePoolNodeConfigConfidentialNodesOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigConfidentialNodes;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a>

---


### ContainerNodePoolNodeConfigEffectiveTaintsList <a name="ContainerNodePoolNodeConfigEffectiveTaintsList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigEffectiveTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerNodePoolNodeConfigEffectiveTaintsOutputReference <a name="ContainerNodePoolNodeConfigEffectiveTaintsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaints">ContainerNodePoolNodeConfigEffectiveTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigEffectiveTaints;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaints">ContainerNodePoolNodeConfigEffectiveTaints</a>

---


### ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference <a name="ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---


### ContainerNodePoolNodeConfigFastSocketOutputReference <a name="ContainerNodePoolNodeConfigFastSocketOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigFastSocket;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a>

---


### ContainerNodePoolNodeConfigGcfsConfigOutputReference <a name="ContainerNodePoolNodeConfigGcfsConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigGcfsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resetGpuDriverVersion">resetGpuDriverVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGpuDriverVersion` <a name="resetGpuDriverVersion" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resetGpuDriverVersion"></a>

```typescript
public resetGpuDriverVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersionInput">gpuDriverVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersion">gpuDriverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuDriverVersionInput`<sup>Optional</sup> <a name="gpuDriverVersionInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersionInput"></a>

```typescript
public readonly gpuDriverVersionInput: string;
```

- *Type:* string

---

##### `gpuDriverVersion`<sup>Required</sup> <a name="gpuDriverVersion" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersion"></a>

```typescript
public readonly gpuDriverVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]

---


### ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy">resetGpuSharingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu">resetMaxSharedClientsPerGpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGpuSharingStrategy` <a name="resetGpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy"></a>

```typescript
public resetGpuSharingStrategy(): void
```

##### `resetMaxSharedClientsPerGpu` <a name="resetMaxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu"></a>

```typescript
public resetMaxSharedClientsPerGpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput">gpuSharingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput">maxSharedClientsPerGpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy">gpuSharingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu">maxSharedClientsPerGpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuSharingStrategyInput`<sup>Optional</sup> <a name="gpuSharingStrategyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput"></a>

```typescript
public readonly gpuSharingStrategyInput: string;
```

- *Type:* string

---

##### `maxSharedClientsPerGpuInput`<sup>Optional</sup> <a name="maxSharedClientsPerGpuInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput"></a>

```typescript
public readonly maxSharedClientsPerGpuInput: number;
```

- *Type:* number

---

##### `gpuSharingStrategy`<sup>Required</sup> <a name="gpuSharingStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy"></a>

```typescript
public readonly gpuSharingStrategy: string;
```

- *Type:* string

---

##### `maxSharedClientsPerGpu`<sup>Required</sup> <a name="maxSharedClientsPerGpu" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu"></a>

```typescript
public readonly maxSharedClientsPerGpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>

---


### ContainerNodePoolNodeConfigGuestAcceleratorList <a name="ContainerNodePoolNodeConfigGuestAcceleratorList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]

---


### ContainerNodePoolNodeConfigGuestAcceleratorOutputReference <a name="ContainerNodePoolNodeConfigGuestAcceleratorOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig">putGpuDriverInstallationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig">putGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuDriverInstallationConfig">resetGpuDriverInstallationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize">resetGpuPartitionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig">resetGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGpuDriverInstallationConfig` <a name="putGpuDriverInstallationConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig"></a>

```typescript
public putGpuDriverInstallationConfig(value: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]

---

##### `putGpuSharingConfig` <a name="putGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig"></a>

```typescript
public putGpuSharingConfig(value: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]

---

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetGpuDriverInstallationConfig` <a name="resetGpuDriverInstallationConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuDriverInstallationConfig"></a>

```typescript
public resetGpuDriverInstallationConfig(): void
```

##### `resetGpuPartitionSize` <a name="resetGpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize"></a>

```typescript
public resetGpuPartitionSize(): void
```

##### `resetGpuSharingConfig` <a name="resetGpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig"></a>

```typescript
public resetGpuSharingConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfig">gpuDriverInstallationConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig">gpuSharingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfigInput">gpuDriverInstallationConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput">gpuPartitionSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput">gpuSharingConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize">gpuPartitionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuDriverInstallationConfig`<sup>Required</sup> <a name="gpuDriverInstallationConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfig"></a>

```typescript
public readonly gpuDriverInstallationConfig: ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList</a>

---

##### `gpuSharingConfig`<sup>Required</sup> <a name="gpuSharingConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig"></a>

```typescript
public readonly gpuSharingConfig: ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `gpuDriverInstallationConfigInput`<sup>Optional</sup> <a name="gpuDriverInstallationConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfigInput"></a>

```typescript
public readonly gpuDriverInstallationConfigInput: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>[]

---

##### `gpuPartitionSizeInput`<sup>Optional</sup> <a name="gpuPartitionSizeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput"></a>

```typescript
public readonly gpuPartitionSizeInput: string;
```

- *Type:* string

---

##### `gpuSharingConfigInput`<sup>Optional</sup> <a name="gpuSharingConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput"></a>

```typescript
public readonly gpuSharingConfigInput: IResolvable | ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">ContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `gpuPartitionSize`<sup>Required</sup> <a name="gpuPartitionSize" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize"></a>

```typescript
public readonly gpuPartitionSize: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigGuestAccelerator;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>

---


### ContainerNodePoolNodeConfigGvnicOutputReference <a name="ContainerNodePoolNodeConfigGvnicOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigGvnic;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---


### ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference <a name="ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.maintenanceIntervalInput"></a>

```typescript
public readonly maintenanceIntervalInput: string;
```

- *Type:* string

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.maintenanceInterval"></a>

```typescript
public readonly maintenanceInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigHostMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a>

---


### ContainerNodePoolNodeConfigKubeletConfigOutputReference <a name="ContainerNodePoolNodeConfigKubeletConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota">resetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">resetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit">resetPodPidsLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCfsQuota` <a name="resetCpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```typescript
public resetCpuCfsQuota(): void
```

##### `resetCpuCfsQuotaPeriod` <a name="resetCpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```typescript
public resetCpuCfsQuotaPeriod(): void
```

##### `resetPodPidsLimit` <a name="resetPodPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit"></a>

```typescript
public resetPodPidsLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpuCfsQuotaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpuCfsQuotaPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpuManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput">podPidsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCfsQuotaInput`<sup>Optional</sup> <a name="cpuCfsQuotaInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```typescript
public readonly cpuCfsQuotaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="cpuCfsQuotaPeriodInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```typescript
public readonly cpuCfsQuotaPeriodInput: string;
```

- *Type:* string

---

##### `cpuManagerPolicyInput`<sup>Optional</sup> <a name="cpuManagerPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```typescript
public readonly cpuManagerPolicyInput: string;
```

- *Type:* string

---

##### `podPidsLimitInput`<sup>Optional</sup> <a name="podPidsLimitInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```typescript
public readonly podPidsLimitInput: number;
```

- *Type:* number

---

##### `cpuCfsQuota`<sup>Required</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriod`<sup>Required</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

---

##### `podPidsLimit`<sup>Required</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---


### ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resetCgroupMode">resetCgroupMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resetSysctls">resetSysctls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCgroupMode` <a name="resetCgroupMode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resetCgroupMode"></a>

```typescript
public resetCgroupMode(): void
```

##### `resetSysctls` <a name="resetSysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resetSysctls"></a>

```typescript
public resetSysctls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.cgroupModeInput">cgroupModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput">sysctlsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.cgroupMode">cgroupMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls">sysctls</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cgroupModeInput`<sup>Optional</sup> <a name="cgroupModeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.cgroupModeInput"></a>

```typescript
public readonly cgroupModeInput: string;
```

- *Type:* string

---

##### `sysctlsInput`<sup>Optional</sup> <a name="sysctlsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput"></a>

```typescript
public readonly sysctlsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cgroupMode`<sup>Required</sup> <a name="cgroupMode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.cgroupMode"></a>

```typescript
public readonly cgroupMode: string;
```

- *Type:* string

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls"></a>

```typescript
public readonly sysctls: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigLinuxNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---


### ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference <a name="ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---


### ContainerNodePoolNodeConfigOutputReference <a name="ContainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putConfidentialNodes">putConfidentialNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig">putEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putFastSocket">putFastSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig">putGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic">putGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putHostMaintenancePolicy">putHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig">putKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig">putLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig">putLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig">putSoleTenantConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig">putWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey">resetBootDiskKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetConfidentialNodes">resetConfidentialNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig">resetEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetFastSocket">resetFastSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig">resetGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic">resetGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetHostMaintenancePolicy">resetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig">resetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig">resetLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig">resetLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant">resetLoggingVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup">resetNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels">resetResourceLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSoleTenantConfig">resetSoleTenantConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot">resetSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig">resetWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures"></a>

```typescript
public putAdvancedMachineFeatures(value: ContainerNodePoolNodeConfigAdvancedMachineFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `putConfidentialNodes` <a name="putConfidentialNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putConfidentialNodes"></a>

```typescript
public putConfidentialNodes(value: ContainerNodePoolNodeConfigConfidentialNodes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putConfidentialNodes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a>

---

##### `putEphemeralStorageLocalSsdConfig` <a name="putEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig"></a>

```typescript
public putEphemeralStorageLocalSsdConfig(value: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `putFastSocket` <a name="putFastSocket" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putFastSocket"></a>

```typescript
public putFastSocket(value: ContainerNodePoolNodeConfigFastSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putFastSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a>

---

##### `putGcfsConfig` <a name="putGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig"></a>

```typescript
public putGcfsConfig(value: ContainerNodePoolNodeConfigGcfsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGcfsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator"></a>

```typescript
public putGuestAccelerator(value: IResolvable | ContainerNodePoolNodeConfigGuestAccelerator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGuestAccelerator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]

---

##### `putGvnic` <a name="putGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic"></a>

```typescript
public putGvnic(value: ContainerNodePoolNodeConfigGvnic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putGvnic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---

##### `putHostMaintenancePolicy` <a name="putHostMaintenancePolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putHostMaintenancePolicy"></a>

```typescript
public putHostMaintenancePolicy(value: ContainerNodePoolNodeConfigHostMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putHostMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a>

---

##### `putKubeletConfig` <a name="putKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig"></a>

```typescript
public putKubeletConfig(value: ContainerNodePoolNodeConfigKubeletConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `putLinuxNodeConfig` <a name="putLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig"></a>

```typescript
public putLinuxNodeConfig(value: ContainerNodePoolNodeConfigLinuxNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `putLocalNvmeSsdBlockConfig` <a name="putLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig"></a>

```typescript
public putLocalNvmeSsdBlockConfig(value: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: ContainerNodePoolNodeConfigReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: ContainerNodePoolNodeConfigShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `putSoleTenantConfig` <a name="putSoleTenantConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig"></a>

```typescript
public putSoleTenantConfig(value: ContainerNodePoolNodeConfigSoleTenantConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a>

---

##### `putTaint` <a name="putTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint"></a>

```typescript
public putTaint(value: IResolvable | ContainerNodePoolNodeConfigTaint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putTaint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]

---

##### `putWorkloadMetadataConfig` <a name="putWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig"></a>

```typescript
public putWorkloadMetadataConfig(value: ContainerNodePoolNodeConfigWorkloadMetadataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures"></a>

```typescript
public resetAdvancedMachineFeatures(): void
```

##### `resetBootDiskKmsKey` <a name="resetBootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey"></a>

```typescript
public resetBootDiskKmsKey(): void
```

##### `resetConfidentialNodes` <a name="resetConfidentialNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetConfidentialNodes"></a>

```typescript
public resetConfidentialNodes(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetEphemeralStorageLocalSsdConfig` <a name="resetEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig"></a>

```typescript
public resetEphemeralStorageLocalSsdConfig(): void
```

##### `resetFastSocket` <a name="resetFastSocket" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetFastSocket"></a>

```typescript
public resetFastSocket(): void
```

##### `resetGcfsConfig` <a name="resetGcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGcfsConfig"></a>

```typescript
public resetGcfsConfig(): void
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator"></a>

```typescript
public resetGuestAccelerator(): void
```

##### `resetGvnic` <a name="resetGvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetGvnic"></a>

```typescript
public resetGvnic(): void
```

##### `resetHostMaintenancePolicy` <a name="resetHostMaintenancePolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetHostMaintenancePolicy"></a>

```typescript
public resetHostMaintenancePolicy(): void
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetKubeletConfig` <a name="resetKubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetKubeletConfig"></a>

```typescript
public resetKubeletConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLinuxNodeConfig` <a name="resetLinuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig"></a>

```typescript
public resetLinuxNodeConfig(): void
```

##### `resetLocalNvmeSsdBlockConfig` <a name="resetLocalNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig"></a>

```typescript
public resetLocalNvmeSsdBlockConfig(): void
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount"></a>

```typescript
public resetLocalSsdCount(): void
```

##### `resetLoggingVariant` <a name="resetLoggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetLoggingVariant"></a>

```typescript
public resetLoggingVariant(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform"></a>

```typescript
public resetMinCpuPlatform(): void
```

##### `resetNodeGroup` <a name="resetNodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetNodeGroup"></a>

```typescript
public resetNodeGroup(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetPreemptible"></a>

```typescript
public resetPreemptible(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetResourceLabels` <a name="resetResourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetResourceLabels"></a>

```typescript
public resetResourceLabels(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetSoleTenantConfig` <a name="resetSoleTenantConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSoleTenantConfig"></a>

```typescript
public resetSoleTenantConfig(): void
```

##### `resetSpot` <a name="resetSpot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetSpot"></a>

```typescript
public resetSpot(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetTaint"></a>

```typescript
public resetTaint(): void
```

##### `resetWorkloadMetadataConfig` <a name="resetWorkloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig"></a>

```typescript
public resetWorkloadMetadataConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.confidentialNodes">confidentialNodes</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference">ContainerNodePoolNodeConfigConfidentialNodesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.effectiveTaints">effectiveTaints</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList">ContainerNodePoolNodeConfigEffectiveTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig">ephemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fastSocket">fastSocket</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference">ContainerNodePoolNodeConfigFastSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig">gcfsConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference">ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig">linuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig">localNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.soleTenantConfig">soleTenantConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference">ContainerNodePoolNodeConfigSoleTenantConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig">workloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput">bootDiskKmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.confidentialNodesInput">confidentialNodesInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput">ephemeralStorageLocalSsdConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fastSocketInput">fastSocketInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput">gcfsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput">gvnicInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.hostMaintenancePolicyInput">hostMaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput">kubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput">linuxNodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput">localNvmeSsdBlockConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput">loggingVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput">nodeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput">resourceLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.soleTenantConfigInput">soleTenantConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput">spotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput">taintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput">workloadMetadataConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey">bootDiskKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant">loggingVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup">nodeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels">resourceLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot">spot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">ContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a>

---

##### `confidentialNodes`<sup>Required</sup> <a name="confidentialNodes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.confidentialNodes"></a>

```typescript
public readonly confidentialNodes: ContainerNodePoolNodeConfigConfidentialNodesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodesOutputReference">ContainerNodePoolNodeConfigConfidentialNodesOutputReference</a>

---

##### `effectiveTaints`<sup>Required</sup> <a name="effectiveTaints" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.effectiveTaints"></a>

```typescript
public readonly effectiveTaints: ContainerNodePoolNodeConfigEffectiveTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEffectiveTaintsList">ContainerNodePoolNodeConfigEffectiveTaintsList</a>

---

##### `ephemeralStorageLocalSsdConfig`<sup>Required</sup> <a name="ephemeralStorageLocalSsdConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig"></a>

```typescript
public readonly ephemeralStorageLocalSsdConfig: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a>

---

##### `fastSocket`<sup>Required</sup> <a name="fastSocket" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fastSocket"></a>

```typescript
public readonly fastSocket: ContainerNodePoolNodeConfigFastSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocketOutputReference">ContainerNodePoolNodeConfigFastSocketOutputReference</a>

---

##### `gcfsConfig`<sup>Required</sup> <a name="gcfsConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfig"></a>

```typescript
public readonly gcfsConfig: ContainerNodePoolNodeConfigGcfsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfigOutputReference">ContainerNodePoolNodeConfigGcfsConfigOutputReference</a>

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: ContainerNodePoolNodeConfigGuestAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAcceleratorList">ContainerNodePoolNodeConfigGuestAcceleratorList</a>

---

##### `gvnic`<sup>Required</sup> <a name="gvnic" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnic"></a>

```typescript
public readonly gvnic: ContainerNodePoolNodeConfigGvnicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnicOutputReference">ContainerNodePoolNodeConfigGvnicOutputReference</a>

---

##### `hostMaintenancePolicy`<sup>Required</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.hostMaintenancePolicy"></a>

```typescript
public readonly hostMaintenancePolicy: ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference">ContainerNodePoolNodeConfigHostMaintenancePolicyOutputReference</a>

---

##### `kubeletConfig`<sup>Required</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: ContainerNodePoolNodeConfigKubeletConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfigOutputReference">ContainerNodePoolNodeConfigKubeletConfigOutputReference</a>

---

##### `linuxNodeConfig`<sup>Required</sup> <a name="linuxNodeConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig"></a>

```typescript
public readonly linuxNodeConfig: ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">ContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a>

---

##### `localNvmeSsdBlockConfig`<sup>Required</sup> <a name="localNvmeSsdBlockConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig"></a>

```typescript
public readonly localNvmeSsdBlockConfig: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: ContainerNodePoolNodeConfigReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference">ContainerNodePoolNodeConfigReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a>

---

##### `soleTenantConfig`<sup>Required</sup> <a name="soleTenantConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.soleTenantConfig"></a>

```typescript
public readonly soleTenantConfig: ContainerNodePoolNodeConfigSoleTenantConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference">ContainerNodePoolNodeConfigSoleTenantConfigOutputReference</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taint"></a>

```typescript
public readonly taint: ContainerNodePoolNodeConfigTaintList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList">ContainerNodePoolNodeConfigTaintList</a>

---

##### `workloadMetadataConfig`<sup>Required</sup> <a name="workloadMetadataConfig" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig"></a>

```typescript
public readonly workloadMetadataConfig: ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput"></a>

```typescript
public readonly advancedMachineFeaturesInput: ContainerNodePoolNodeConfigAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigAdvancedMachineFeatures">ContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `bootDiskKmsKeyInput`<sup>Optional</sup> <a name="bootDiskKmsKeyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput"></a>

```typescript
public readonly bootDiskKmsKeyInput: string;
```

- *Type:* string

---

##### `confidentialNodesInput`<sup>Optional</sup> <a name="confidentialNodesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.confidentialNodesInput"></a>

```typescript
public readonly confidentialNodesInput: ContainerNodePoolNodeConfigConfidentialNodes;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigConfidentialNodes">ContainerNodePoolNodeConfigConfidentialNodes</a>

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `ephemeralStorageLocalSsdConfigInput`<sup>Optional</sup> <a name="ephemeralStorageLocalSsdConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput"></a>

```typescript
public readonly ephemeralStorageLocalSsdConfigInput: ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">ContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `fastSocketInput`<sup>Optional</sup> <a name="fastSocketInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.fastSocketInput"></a>

```typescript
public readonly fastSocketInput: ContainerNodePoolNodeConfigFastSocket;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigFastSocket">ContainerNodePoolNodeConfigFastSocket</a>

---

##### `gcfsConfigInput`<sup>Optional</sup> <a name="gcfsConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput"></a>

```typescript
public readonly gcfsConfigInput: ContainerNodePoolNodeConfigGcfsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGcfsConfig">ContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput"></a>

```typescript
public readonly guestAcceleratorInput: IResolvable | ContainerNodePoolNodeConfigGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGuestAccelerator">ContainerNodePoolNodeConfigGuestAccelerator</a>[]

---

##### `gvnicInput`<sup>Optional</sup> <a name="gvnicInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.gvnicInput"></a>

```typescript
public readonly gvnicInput: ContainerNodePoolNodeConfigGvnic;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigGvnic">ContainerNodePoolNodeConfigGvnic</a>

---

##### `hostMaintenancePolicyInput`<sup>Optional</sup> <a name="hostMaintenancePolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.hostMaintenancePolicyInput"></a>

```typescript
public readonly hostMaintenancePolicyInput: ContainerNodePoolNodeConfigHostMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigHostMaintenancePolicy">ContainerNodePoolNodeConfigHostMaintenancePolicy</a>

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `kubeletConfigInput`<sup>Optional</sup> <a name="kubeletConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput"></a>

```typescript
public readonly kubeletConfigInput: ContainerNodePoolNodeConfigKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigKubeletConfig">ContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linuxNodeConfigInput`<sup>Optional</sup> <a name="linuxNodeConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput"></a>

```typescript
public readonly linuxNodeConfigInput: ContainerNodePoolNodeConfigLinuxNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLinuxNodeConfig">ContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `localNvmeSsdBlockConfigInput`<sup>Optional</sup> <a name="localNvmeSsdBlockConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput"></a>

```typescript
public readonly localNvmeSsdBlockConfigInput: ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">ContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput"></a>

```typescript
public readonly localSsdCountInput: number;
```

- *Type:* number

---

##### `loggingVariantInput`<sup>Optional</sup> <a name="loggingVariantInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput"></a>

```typescript
public readonly loggingVariantInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput"></a>

```typescript
public readonly minCpuPlatformInput: string;
```

- *Type:* string

---

##### `nodeGroupInput`<sup>Optional</sup> <a name="nodeGroupInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput"></a>

```typescript
public readonly nodeGroupInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptibleInput"></a>

```typescript
public readonly preemptibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: ContainerNodePoolNodeConfigReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `resourceLabelsInput`<sup>Optional</sup> <a name="resourceLabelsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput"></a>

```typescript
public readonly resourceLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: ContainerNodePoolNodeConfigShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `soleTenantConfigInput`<sup>Optional</sup> <a name="soleTenantConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.soleTenantConfigInput"></a>

```typescript
public readonly soleTenantConfigInput: ContainerNodePoolNodeConfigSoleTenantConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a>

---

##### `spotInput`<sup>Optional</sup> <a name="spotInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spotInput"></a>

```typescript
public readonly spotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.taintInput"></a>

```typescript
public readonly taintInput: IResolvable | ContainerNodePoolNodeConfigTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]

---

##### `workloadMetadataConfigInput`<sup>Optional</sup> <a name="workloadMetadataConfigInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput"></a>

```typescript
public readonly workloadMetadataConfigInput: ContainerNodePoolNodeConfigWorkloadMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `bootDiskKmsKey`<sup>Required</sup> <a name="bootDiskKmsKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey"></a>

```typescript
public readonly bootDiskKmsKey: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.localSsdCount"></a>

```typescript
public readonly localSsdCount: number;
```

- *Type:* number

---

##### `loggingVariant`<sup>Required</sup> <a name="loggingVariant" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.loggingVariant"></a>

```typescript
public readonly loggingVariant: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `nodeGroup`<sup>Required</sup> <a name="nodeGroup" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.nodeGroup"></a>

```typescript
public readonly nodeGroup: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.resourceLabels"></a>

```typescript
public readonly resourceLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.spot"></a>

```typescript
public readonly spot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfig">ContainerNodePoolNodeConfig</a>

---


### ContainerNodePoolNodeConfigReservationAffinityOutputReference <a name="ContainerNodePoolNodeConfigReservationAffinityOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```typescript
public readonly consumeReservationTypeInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigReservationAffinity">ContainerNodePoolNodeConfigReservationAffinity</a>

---


### ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference <a name="ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigShieldedInstanceConfig">ContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---


### ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList <a name="ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]

---


### ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference <a name="ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>

---


### ContainerNodePoolNodeConfigSoleTenantConfigOutputReference <a name="ContainerNodePoolNodeConfigSoleTenantConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity">putNodeAffinity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeAffinity` <a name="putNodeAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity"></a>

```typescript
public putNodeAffinity(value: IResolvable | ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinityInput">nodeAffinityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList</a>

---

##### `nodeAffinityInput`<sup>Optional</sup> <a name="nodeAffinityInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinityInput"></a>

```typescript
public readonly nodeAffinityInput: IResolvable | ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">ContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigSoleTenantConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigSoleTenantConfig">ContainerNodePoolNodeConfigSoleTenantConfig</a>

---


### ContainerNodePoolNodeConfigTaintList <a name="ContainerNodePoolNodeConfigTaintList" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigTaintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get"></a>

```typescript
public get(index: number): ContainerNodePoolNodeConfigTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>[]

---


### ContainerNodePoolNodeConfigTaintOutputReference <a name="ContainerNodePoolNodeConfigTaintOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolNodeConfigTaint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigTaint">ContainerNodePoolNodeConfigTaint</a>

---


### ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference <a name="ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolNodeConfigWorkloadMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolNodeConfigWorkloadMetadataConfig">ContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---


### ContainerNodePoolPlacementPolicyOutputReference <a name="ContainerNodePoolPlacementPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolPlacementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resetTpuTopology">resetTpuTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```

##### `resetTpuTopology` <a name="resetTpuTopology" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.resetTpuTopology"></a>

```typescript
public resetTpuTopology(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.tpuTopologyInput">tpuTopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.tpuTopology">tpuTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `tpuTopologyInput`<sup>Optional</sup> <a name="tpuTopologyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.tpuTopologyInput"></a>

```typescript
public readonly tpuTopologyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `tpuTopology`<sup>Required</sup> <a name="tpuTopology" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.tpuTopology"></a>

```typescript
public readonly tpuTopology: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolPlacementPolicy">ContainerNodePoolPlacementPolicy</a>

---


### ContainerNodePoolTimeoutsOutputReference <a name="ContainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolTimeouts">ContainerNodePoolTimeouts</a>

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy">putStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration">resetNodePoolSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardRolloutPolicy` <a name="putStandardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy"></a>

```typescript
public putStandardRolloutPolicy(value: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `resetNodePoolSoakDuration` <a name="resetNodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration"></a>

```typescript
public resetNodePoolSoakDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy">standardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput">nodePoolSoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput">standardRolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration">nodePoolSoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardRolloutPolicy`<sup>Required</sup> <a name="standardRolloutPolicy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy"></a>

```typescript
public readonly standardRolloutPolicy: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a>

---

##### `nodePoolSoakDurationInput`<sup>Optional</sup> <a name="nodePoolSoakDurationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput"></a>

```typescript
public readonly nodePoolSoakDurationInput: string;
```

- *Type:* string

---

##### `standardRolloutPolicyInput`<sup>Optional</sup> <a name="standardRolloutPolicyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput"></a>

```typescript
public readonly standardRolloutPolicyInput: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `nodePoolSoakDuration`<sup>Required</sup> <a name="nodePoolSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration"></a>

```typescript
public readonly nodePoolSoakDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolUpgradeSettingsBlueGreenSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---


### ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference <a name="ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount">resetBatchNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage">resetBatchPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration">resetBatchSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchNodeCount` <a name="resetBatchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount"></a>

```typescript
public resetBatchNodeCount(): void
```

##### `resetBatchPercentage` <a name="resetBatchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage"></a>

```typescript
public resetBatchPercentage(): void
```

##### `resetBatchSoakDuration` <a name="resetBatchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration"></a>

```typescript
public resetBatchSoakDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput">batchNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput">batchPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput">batchSoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount">batchNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage">batchPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration">batchSoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchNodeCountInput`<sup>Optional</sup> <a name="batchNodeCountInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput"></a>

```typescript
public readonly batchNodeCountInput: number;
```

- *Type:* number

---

##### `batchPercentageInput`<sup>Optional</sup> <a name="batchPercentageInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```typescript
public readonly batchPercentageInput: number;
```

- *Type:* number

---

##### `batchSoakDurationInput`<sup>Optional</sup> <a name="batchSoakDurationInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput"></a>

```typescript
public readonly batchSoakDurationInput: string;
```

- *Type:* string

---

##### `batchNodeCount`<sup>Required</sup> <a name="batchNodeCount" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount"></a>

```typescript
public readonly batchNodeCount: number;
```

- *Type:* number

---

##### `batchPercentage`<sup>Required</sup> <a name="batchPercentage" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage"></a>

```typescript
public readonly batchPercentage: number;
```

- *Type:* number

---

##### `batchSoakDuration`<sup>Required</sup> <a name="batchSoakDuration" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration"></a>

```typescript
public readonly batchSoakDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">ContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---


### ContainerNodePoolUpgradeSettingsOutputReference <a name="ContainerNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```typescript
import { containerNodePool } from '@cdktf/provider-google'

new containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings">putBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings">resetBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge">resetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable">resetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlueGreenSettings` <a name="putBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings"></a>

```typescript
public putBlueGreenSettings(value: ContainerNodePoolUpgradeSettingsBlueGreenSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `resetBlueGreenSettings` <a name="resetBlueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings"></a>

```typescript
public resetBlueGreenSettings(): void
```

##### `resetMaxSurge` <a name="resetMaxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge"></a>

```typescript
public resetMaxSurge(): void
```

##### `resetMaxUnavailable` <a name="resetMaxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable"></a>

```typescript
public resetMaxUnavailable(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings">blueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput">blueGreenSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">maxSurgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput">maxUnavailableInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blueGreenSettings`<sup>Required</sup> <a name="blueGreenSettings" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings"></a>

```typescript
public readonly blueGreenSettings: ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">ContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a>

---

##### `blueGreenSettingsInput`<sup>Optional</sup> <a name="blueGreenSettingsInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput"></a>

```typescript
public readonly blueGreenSettingsInput: ContainerNodePoolUpgradeSettingsBlueGreenSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsBlueGreenSettings">ContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `maxSurgeInput`<sup>Optional</sup> <a name="maxSurgeInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```typescript
public readonly maxSurgeInput: number;
```

- *Type:* number

---

##### `maxUnavailableInput`<sup>Optional</sup> <a name="maxUnavailableInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput"></a>

```typescript
public readonly maxUnavailableInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

---

##### `maxUnavailable`<sup>Required</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNodePoolUpgradeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerNodePool.ContainerNodePoolUpgradeSettings">ContainerNodePoolUpgradeSettings</a>

---



