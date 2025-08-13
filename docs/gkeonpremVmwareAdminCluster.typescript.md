# `gkeonpremVmwareAdminCluster` Submodule <a name="`gkeonpremVmwareAdminCluster` Submodule" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareAdminCluster <a name="GkeonpremVmwareAdminCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster(scope: Construct, id: string, config: GkeonpremVmwareAdminClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig">GkeonpremVmwareAdminClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig">GkeonpremVmwareAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode">putAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups">putAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig">putAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode">putControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig">putPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig">putPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter">putVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode">resetAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups">resetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig">resetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership">resetBootstrapClusterMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode">resetControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetEnableAdvancedCluster">resetEnableAdvancedCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion">resetOnPremVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig">resetPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig">resetPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter">resetVcenter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddonNode` <a name="putAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode"></a>

```typescript
public putAddonNode(value: GkeonpremVmwareAdminClusterAddonNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---

##### `putAntiAffinityGroups` <a name="putAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups"></a>

```typescript
public putAntiAffinityGroups(value: GkeonpremVmwareAdminClusterAntiAffinityGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: GkeonpremVmwareAdminClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---

##### `putAutoRepairConfig` <a name="putAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig"></a>

```typescript
public putAutoRepairConfig(value: GkeonpremVmwareAdminClusterAutoRepairConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `putControlPlaneNode` <a name="putControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode"></a>

```typescript
public putControlPlaneNode(value: GkeonpremVmwareAdminClusterControlPlaneNode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: GkeonpremVmwareAdminClusterLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GkeonpremVmwareAdminClusterNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `putPlatformConfig` <a name="putPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig"></a>

```typescript
public putPlatformConfig(value: GkeonpremVmwareAdminClusterPlatformConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `putPrivateRegistryConfig` <a name="putPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig"></a>

```typescript
public putPrivateRegistryConfig(value: GkeonpremVmwareAdminClusterPrivateRegistryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeonpremVmwareAdminClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

---

##### `putVcenter` <a name="putVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter"></a>

```typescript
public putVcenter(value: GkeonpremVmwareAdminClusterVcenter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---

##### `resetAddonNode` <a name="resetAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode"></a>

```typescript
public resetAddonNode(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAntiAffinityGroups` <a name="resetAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups"></a>

```typescript
public resetAntiAffinityGroups(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetAutoRepairConfig` <a name="resetAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig"></a>

```typescript
public resetAutoRepairConfig(): void
```

##### `resetBootstrapClusterMembership` <a name="resetBootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership"></a>

```typescript
public resetBootstrapClusterMembership(): void
```

##### `resetControlPlaneNode` <a name="resetControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode"></a>

```typescript
public resetControlPlaneNode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableAdvancedCluster` <a name="resetEnableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetEnableAdvancedCluster"></a>

```typescript
public resetEnableAdvancedCluster(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetOnPremVersion` <a name="resetOnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion"></a>

```typescript
public resetOnPremVersion(): void
```

##### `resetPlatformConfig` <a name="resetPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig"></a>

```typescript
public resetPlatformConfig(): void
```

##### `resetPrivateRegistryConfig` <a name="resetPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig"></a>

```typescript
public resetPrivateRegistryConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVcenter` <a name="resetVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter"></a>

```typescript
public resetVcenter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremVmwareAdminCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremVmwareAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode">addonNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName">localName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig">platformConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig">privateRegistryConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput">addonNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput">antiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput">autoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput">bootstrapClusterMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput">controlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedClusterInput">enableAdvancedClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput">onPremVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput">platformConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput">privateRegistryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput">vcenterInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership">bootstrapClusterMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster">enableAdvancedCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addonNode`<sup>Required</sup> <a name="addonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode"></a>

```typescript
public readonly addonNode: GkeonpremVmwareAdminClusterAddonNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a>

---

##### `antiAffinityGroups`<sup>Required</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups"></a>

```typescript
public readonly antiAffinityGroups: GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization"></a>

```typescript
public readonly authorization: GkeonpremVmwareAdminClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a>

---

##### `autoRepairConfig`<sup>Required</sup> <a name="autoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig"></a>

```typescript
public readonly autoRepairConfig: GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a>

---

##### `controlPlaneNode`<sup>Required</sup> <a name="controlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode"></a>

```typescript
public readonly controlPlaneNode: GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet"></a>

```typescript
public readonly fleet: GkeonpremVmwareAdminClusterFleetList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GkeonpremVmwareAdminClusterLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName"></a>

```typescript
public readonly localName: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig"></a>

```typescript
public readonly networkConfig: GkeonpremVmwareAdminClusterNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a>

---

##### `platformConfig`<sup>Required</sup> <a name="platformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig"></a>

```typescript
public readonly platformConfig: GkeonpremVmwareAdminClusterPlatformConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a>

---

##### `privateRegistryConfig`<sup>Required</sup> <a name="privateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig"></a>

```typescript
public readonly privateRegistryConfig: GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status"></a>

```typescript
public readonly status: GkeonpremVmwareAdminClusterStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremVmwareAdminClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter"></a>

```typescript
public readonly vcenter: GkeonpremVmwareAdminClusterVcenterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a>

---

##### `addonNodeInput`<sup>Optional</sup> <a name="addonNodeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput"></a>

```typescript
public readonly addonNodeInput: GkeonpremVmwareAdminClusterAddonNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `antiAffinityGroupsInput`<sup>Optional</sup> <a name="antiAffinityGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput"></a>

```typescript
public readonly antiAffinityGroupsInput: GkeonpremVmwareAdminClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GkeonpremVmwareAdminClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---

##### `autoRepairConfigInput`<sup>Optional</sup> <a name="autoRepairConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput"></a>

```typescript
public readonly autoRepairConfigInput: GkeonpremVmwareAdminClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `bootstrapClusterMembershipInput`<sup>Optional</sup> <a name="bootstrapClusterMembershipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput"></a>

```typescript
public readonly bootstrapClusterMembershipInput: string;
```

- *Type:* string

---

##### `controlPlaneNodeInput`<sup>Optional</sup> <a name="controlPlaneNodeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput"></a>

```typescript
public readonly controlPlaneNodeInput: GkeonpremVmwareAdminClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableAdvancedClusterInput`<sup>Optional</sup> <a name="enableAdvancedClusterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedClusterInput"></a>

```typescript
public readonly enableAdvancedClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: GkeonpremVmwareAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GkeonpremVmwareAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `onPremVersionInput`<sup>Optional</sup> <a name="onPremVersionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput"></a>

```typescript
public readonly onPremVersionInput: string;
```

- *Type:* string

---

##### `platformConfigInput`<sup>Optional</sup> <a name="platformConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput"></a>

```typescript
public readonly platformConfigInput: GkeonpremVmwareAdminClusterPlatformConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `privateRegistryConfigInput`<sup>Optional</sup> <a name="privateRegistryConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput"></a>

```typescript
public readonly privateRegistryConfigInput: GkeonpremVmwareAdminClusterPrivateRegistryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeonpremVmwareAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

---

##### `vcenterInput`<sup>Optional</sup> <a name="vcenterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput"></a>

```typescript
public readonly vcenterInput: GkeonpremVmwareAdminClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bootstrapClusterMembership`<sup>Required</sup> <a name="bootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership"></a>

```typescript
public readonly bootstrapClusterMembership: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableAdvancedCluster`<sup>Required</sup> <a name="enableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster"></a>

```typescript
public readonly enableAdvancedCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareAdminClusterAddonNode <a name="GkeonpremVmwareAdminClusterAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAddonNode: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | auto_resize_config block. |

---

##### `autoResizeConfig`<sup>Optional</sup> <a name="autoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig"></a>

```typescript
public readonly autoResizeConfig: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_resize_config GkeonpremVmwareAdminCluster#auto_resize_config}

---

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable controle plane node auto resizing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable controle plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterAntiAffinityGroups <a name="GkeonpremVmwareAdminClusterAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAntiAffinityGroups: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```typescript
public readonly aagConfigDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#aag_config_disabled GkeonpremVmwareAdminCluster#aag_config_disabled}

---

### GkeonpremVmwareAdminClusterAuthorization <a name="GkeonpremVmwareAdminClusterAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAuthorization: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers">viewerUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]</code> | viewer_users block. |

---

##### `viewerUsers`<sup>Optional</sup> <a name="viewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers"></a>

```typescript
public readonly viewerUsers: IResolvable | GkeonpremVmwareAdminClusterAuthorizationViewerUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]

viewer_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#viewer_users GkeonpremVmwareAdminCluster#viewer_users}

---

### GkeonpremVmwareAdminClusterAuthorizationViewerUsers <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAuthorizationViewerUsers: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#username GkeonpremVmwareAdminCluster#username}

---

### GkeonpremVmwareAdminClusterAutoRepairConfig <a name="GkeonpremVmwareAdminClusterAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterAutoRepairConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether auto repair is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterConfig <a name="GkeonpremVmwareAdminClusterConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name">name</a></code> | <code>string</code> | The VMware admin cluster resource name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode">addonNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | addon_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups">antiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig">autoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership">bootstrapClusterMembership</a></code> | <code>string</code> | The bootstrap cluster this VMware admin cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode">controlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description">description</a></code> | <code>string</code> | A human readable description of this VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.enableAdvancedCluster">enableAdvancedCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the advanced cluster feature is enabled. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType">imageType</a></code> | <code>string</code> | The OS image type for the VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | The Anthos clusters on the VMware version for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig">platformConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | platform_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig">privateRegistryConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | private_registry_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | vcenter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#location GkeonpremVmwareAdminCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The VMware admin cluster resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#name GkeonpremVmwareAdminCluster#name}

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GkeonpremVmwareAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#network_config GkeonpremVmwareAdminCluster#network_config}

---

##### `addonNode`<sup>Optional</sup> <a name="addonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode"></a>

```typescript
public readonly addonNode: GkeonpremVmwareAdminClusterAddonNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

addon_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#addon_node GkeonpremVmwareAdminCluster#addon_node}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the VMware Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#annotations GkeonpremVmwareAdminCluster#annotations}

---

##### `antiAffinityGroups`<sup>Optional</sup> <a name="antiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups"></a>

```typescript
public readonly antiAffinityGroups: GkeonpremVmwareAdminClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#anti_affinity_groups GkeonpremVmwareAdminCluster#anti_affinity_groups}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: GkeonpremVmwareAdminClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#authorization GkeonpremVmwareAdminCluster#authorization}

---

##### `autoRepairConfig`<sup>Optional</sup> <a name="autoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig"></a>

```typescript
public readonly autoRepairConfig: GkeonpremVmwareAdminClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_repair_config GkeonpremVmwareAdminCluster#auto_repair_config}

---

##### `bootstrapClusterMembership`<sup>Optional</sup> <a name="bootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership"></a>

```typescript
public readonly bootstrapClusterMembership: string;
```

- *Type:* string

The bootstrap cluster this VMware admin cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GkeonpremVmwareAdminCluster#bootstrap_cluster_membership}

---

##### `controlPlaneNode`<sup>Optional</sup> <a name="controlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode"></a>

```typescript
public readonly controlPlaneNode: GkeonpremVmwareAdminClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node GkeonpremVmwareAdminCluster#control_plane_node}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human readable description of this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#description GkeonpremVmwareAdminCluster#description}

---

##### `enableAdvancedCluster`<sup>Optional</sup> <a name="enableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.enableAdvancedCluster"></a>

```typescript
public readonly enableAdvancedCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the advanced cluster feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#enable_advanced_cluster GkeonpremVmwareAdminCluster#enable_advanced_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The OS image type for the VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#image_type GkeonpremVmwareAdminCluster#image_type}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GkeonpremVmwareAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#load_balancer GkeonpremVmwareAdminCluster#load_balancer}

---

##### `onPremVersion`<sup>Optional</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

The Anthos clusters on the VMware version for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#on_prem_version GkeonpremVmwareAdminCluster#on_prem_version}

---

##### `platformConfig`<sup>Optional</sup> <a name="platformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig"></a>

```typescript
public readonly platformConfig: GkeonpremVmwareAdminClusterPlatformConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#platform_config GkeonpremVmwareAdminCluster#platform_config}

---

##### `privateRegistryConfig`<sup>Optional</sup> <a name="privateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig"></a>

```typescript
public readonly privateRegistryConfig: GkeonpremVmwareAdminClusterPrivateRegistryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

private_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#private_registry_config GkeonpremVmwareAdminCluster#private_registry_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremVmwareAdminClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#timeouts GkeonpremVmwareAdminCluster#timeouts}

---

##### `vcenter`<sup>Optional</sup> <a name="vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter"></a>

```typescript
public readonly vcenter: GkeonpremVmwareAdminClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter GkeonpremVmwareAdminCluster#vcenter}

---

### GkeonpremVmwareAdminClusterControlPlaneNode <a name="GkeonpremVmwareAdminClusterControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterControlPlaneNode: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus">cpus</a></code> | <code>number</code> | The number of vCPUs for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory">memory</a></code> | <code>number</code> | The number of mebibytes of memory for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas">replicas</a></code> | <code>number</code> | The number of control plane nodes for this VMware admin cluster. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

The number of vCPUs for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#cpus GkeonpremVmwareAdminCluster#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

The number of mebibytes of memory for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#memory GkeonpremVmwareAdminCluster#memory}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The number of control plane nodes for this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#replicas GkeonpremVmwareAdminCluster#replicas}

---

### GkeonpremVmwareAdminClusterFleet <a name="GkeonpremVmwareAdminClusterFleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterFleet: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet = { ... }
```


### GkeonpremVmwareAdminClusterLoadBalancer <a name="GkeonpremVmwareAdminClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterLoadBalancer: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig"></a>

```typescript
public readonly vipConfig: GkeonpremVmwareAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#vip_config GkeonpremVmwareAdminCluster#vip_config}

---

##### `f5Config`<sup>Optional</sup> <a name="f5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config"></a>

```typescript
public readonly f5Config: GkeonpremVmwareAdminClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#f5_config GkeonpremVmwareAdminCluster#f5_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#manual_lb_config GkeonpremVmwareAdminCluster#manual_lb_config}

---

##### `metalLbConfig`<sup>Optional</sup> <a name="metalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig"></a>

```typescript
public readonly metalLbConfig: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#metal_lb_config GkeonpremVmwareAdminCluster#metal_lb_config}

---

### GkeonpremVmwareAdminClusterLoadBalancerF5Config <a name="GkeonpremVmwareAdminClusterLoadBalancerF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterLoadBalancerF5Config: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address">address</a></code> | <code>string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition">partition</a></code> | <code>string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool">snatPool</a></code> | <code>string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#partition GkeonpremVmwareAdminCluster#partition}

---

##### `snatPool`<sup>Optional</sup> <a name="snatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool"></a>

```typescript
public readonly snatPool: string;
```

- *Type:* string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#snat_pool GkeonpremVmwareAdminCluster#snat_pool}

---

### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterLoadBalancerManualLbConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort">addonsNodePort</a></code> | <code>number</code> | NodePort for add-ons server in the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>number</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>number</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>number</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>number</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `addonsNodePort`<sup>Optional</sup> <a name="addonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort"></a>

```typescript
public readonly addonsNodePort: number;
```

- *Type:* number

NodePort for add-ons server in the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_node_port GkeonpremVmwareAdminCluster#addons_node_port}

---

##### `controlPlaneNodePort`<sup>Optional</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```typescript
public readonly controlPlaneNodePort: number;
```

- *Type:* number

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node_port GkeonpremVmwareAdminCluster#control_plane_node_port}

---

##### `ingressHttpNodePort`<sup>Optional</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```typescript
public readonly ingressHttpNodePort: number;
```

- *Type:* number

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_http_node_port GkeonpremVmwareAdminCluster#ingress_http_node_port}

---

##### `ingressHttpsNodePort`<sup>Optional</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```typescript
public readonly ingressHttpsNodePort: number;
```

- *Type:* number

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_https_node_port GkeonpremVmwareAdminCluster#ingress_https_node_port}

---

##### `konnectivityServerNodePort`<sup>Optional</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```typescript
public readonly konnectivityServerNodePort: number;
```

- *Type:* number

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GkeonpremVmwareAdminCluster#konnectivity_server_node_port}

---

### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Metal LB is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Metal LB is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterLoadBalancerVipConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterLoadBalancerVipConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip">addonsVip</a></code> | <code>string</code> | The VIP to configure the load balancer for add-ons. |

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_vip GkeonpremVmwareAdminCluster#control_plane_vip}

---

##### `addonsVip`<sup>Optional</sup> <a name="addonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip"></a>

```typescript
public readonly addonsVip: string;
```

- *Type:* string

The VIP to configure the load balancer for add-ons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_vip GkeonpremVmwareAdminCluster#addons_vip}

---

### GkeonpremVmwareAdminClusterNetworkConfig <a name="GkeonpremVmwareAdminClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig">haControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | ha_control_plane_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork">vcenterNetwork</a></code> | <code>string</code> | vcenter_network specifies vCenter network name. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GkeonpremVmwareAdminCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GkeonpremVmwareAdminCluster#service_address_cidr_blocks}

---

##### `dhcpIpConfig`<sup>Optional</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig"></a>

```typescript
public readonly dhcpIpConfig: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#dhcp_ip_config GkeonpremVmwareAdminCluster#dhcp_ip_config}

---

##### `haControlPlaneConfig`<sup>Optional</sup> <a name="haControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig"></a>

```typescript
public readonly haControlPlaneConfig: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

ha_control_plane_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ha_control_plane_config GkeonpremVmwareAdminCluster#ha_control_plane_config}

---

##### `hostConfig`<sup>Optional</sup> <a name="hostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig"></a>

```typescript
public readonly hostConfig: GkeonpremVmwareAdminClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#host_config GkeonpremVmwareAdminCluster#host_config}

---

##### `staticIpConfig`<sup>Optional</sup> <a name="staticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig"></a>

```typescript
public readonly staticIpConfig: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#static_ip_config GkeonpremVmwareAdminCluster#static_ip_config}

---

##### `vcenterNetwork`<sup>Optional</sup> <a name="vcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork"></a>

```typescript
public readonly vcenterNetwork: string;
```

- *Type:* string

vcenter_network specifies vCenter network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter_network GkeonpremVmwareAdminCluster#vcenter_network}

---

### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `controlPlaneIpBlock`<sup>Optional</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock"></a>

```typescript
public readonly controlPlaneIpBlock: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_ip_block GkeonpremVmwareAdminCluster#control_plane_ip_block}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway">gateway</a></code> | <code>string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips">ips</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask">netmask</a></code> | <code>string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips"></a>

```typescript
public readonly ips: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip">ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterNetworkConfigHostConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigHostConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>string[]</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | NTP servers. |

---

##### `dnsSearchDomains`<sup>Optional</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```typescript
public readonly dnsSearchDomains: string[];
```

- *Type:* string[]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_search_domains GkeonpremVmwareAdminCluster#dns_search_domains}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_servers GkeonpremVmwareAdminCluster#dns_servers}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ntp_servers GkeonpremVmwareAdminCluster#ntp_servers}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks">ipBlocks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | ip_blocks block. |

---

##### `ipBlocks`<sup>Optional</sup> <a name="ipBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```typescript
public readonly ipBlocks: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ip_blocks GkeonpremVmwareAdminCluster#ip_blocks}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">gateway</a></code> | <code>string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">ips</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">netmask</a></code> | <code>string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```typescript
public readonly ips: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterPlatformConfig <a name="GkeonpremVmwareAdminClusterPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion">requiredPlatformVersion</a></code> | <code>string</code> | The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. |

---

##### `requiredPlatformVersion`<sup>Optional</sup> <a name="requiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion"></a>

```typescript
public readonly requiredPlatformVersion: string;
```

- *Type:* string

The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#required_platform_version GkeonpremVmwareAdminCluster#required_platform_version}

---

### GkeonpremVmwareAdminClusterPlatformConfigBundles <a name="GkeonpremVmwareAdminClusterPlatformConfigBundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfigBundles: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles = { ... }
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfigBundlesStatus: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus = { ... }
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions = { ... }
```


### GkeonpremVmwareAdminClusterPlatformConfigStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfigStatus: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus = { ... }
```


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPlatformConfigStatusConditions: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions = { ... }
```


### GkeonpremVmwareAdminClusterPrivateRegistryConfig <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterPrivateRegistryConfig: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address">address</a></code> | <code>string</code> | The registry address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert">caCert</a></code> | <code>string</code> | The CA certificate public key for private registry. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The registry address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

The CA certificate public key for private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert GkeonpremVmwareAdminCluster#ca_cert}

---

### GkeonpremVmwareAdminClusterStatus <a name="GkeonpremVmwareAdminClusterStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterStatus: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus = { ... }
```


### GkeonpremVmwareAdminClusterStatusConditions <a name="GkeonpremVmwareAdminClusterStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterStatusConditions: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions = { ... }
```


### GkeonpremVmwareAdminClusterTimeouts <a name="GkeonpremVmwareAdminClusterTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterTimeouts: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}.

---

### GkeonpremVmwareAdminClusterVcenter <a name="GkeonpremVmwareAdminClusterVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

const gkeonpremVmwareAdminClusterVcenter: gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address">address</a></code> | <code>string</code> | The vCenter IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData">caCertData</a></code> | <code>string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster">cluster</a></code> | <code>string</code> | The name of the vCenter cluster for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter">datacenter</a></code> | <code>string</code> | The name of the vCenter datacenter for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk">dataDisk</a></code> | <code>string</code> | The name of the virtual machine disk (VMDK) for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore">datastore</a></code> | <code>string</code> | The name of the vCenter datastore for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder">folder</a></code> | <code>string</code> | The name of the vCenter folder for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool">resourcePool</a></code> | <code>string</code> | The name of the vCenter resource pool for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName">storagePolicyName</a></code> | <code>string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The vCenter IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `caCertData`<sup>Optional</sup> <a name="caCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData"></a>

```typescript
public readonly caCertData: string;
```

- *Type:* string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert_data GkeonpremVmwareAdminCluster#ca_cert_data}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The name of the vCenter cluster for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#cluster GkeonpremVmwareAdminCluster#cluster}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The name of the vCenter datacenter for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#datacenter GkeonpremVmwareAdminCluster#datacenter}

---

##### `dataDisk`<sup>Optional</sup> <a name="dataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk"></a>

```typescript
public readonly dataDisk: string;
```

- *Type:* string

The name of the virtual machine disk (VMDK) for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#data_disk GkeonpremVmwareAdminCluster#data_disk}

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

The name of the vCenter datastore for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#datastore GkeonpremVmwareAdminCluster#datastore}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the vCenter folder for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#folder GkeonpremVmwareAdminCluster#folder}

---

##### `resourcePool`<sup>Optional</sup> <a name="resourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool"></a>

```typescript
public readonly resourcePool: string;
```

- *Type:* string

The name of the vCenter resource pool for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#resource_pool GkeonpremVmwareAdminCluster#resource_pool}

---

##### `storagePolicyName`<sup>Optional</sup> <a name="storagePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName"></a>

```typescript
public readonly storagePolicyName: string;
```

- *Type:* string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gkeonprem_vmware_admin_cluster#storage_policy_name GkeonpremVmwareAdminCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---


### GkeonpremVmwareAdminClusterAddonNodeOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig">putAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig">resetAutoResizeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoResizeConfig` <a name="putAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig"></a>

```typescript
public putAutoResizeConfig(value: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `resetAutoResizeConfig` <a name="resetAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig"></a>

```typescript
public resetAutoResizeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig">autoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput">autoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResizeConfig`<sup>Required</sup> <a name="autoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig"></a>

```typescript
public readonly autoResizeConfig: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a>

---

##### `autoResizeConfigInput`<sup>Optional</sup> <a name="autoResizeConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput"></a>

```typescript
public readonly autoResizeConfigInput: GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterAddonNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---


### GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference <a name="GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">aagConfigDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">aagConfigDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aagConfigDisabledInput`<sup>Optional</sup> <a name="aagConfigDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```typescript
public readonly aagConfigDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aagConfigDisabled`<sup>Required</sup> <a name="aagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```typescript
public readonly aagConfigDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterAntiAffinityGroups;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---


### GkeonpremVmwareAdminClusterAuthorizationOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers">putViewerUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers">resetViewerUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putViewerUsers` <a name="putViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers"></a>

```typescript
public putViewerUsers(value: IResolvable | GkeonpremVmwareAdminClusterAuthorizationViewerUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]

---

##### `resetViewerUsers` <a name="resetViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers"></a>

```typescript
public resetViewerUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers">viewerUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput">viewerUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `viewerUsers`<sup>Required</sup> <a name="viewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers"></a>

```typescript
public readonly viewerUsers: GkeonpremVmwareAdminClusterAuthorizationViewerUsersList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a>

---

##### `viewerUsersInput`<sup>Optional</sup> <a name="viewerUsersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput"></a>

```typescript
public readonly viewerUsersInput: IResolvable | GkeonpremVmwareAdminClusterAuthorizationViewerUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersList <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterAuthorizationViewerUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>[]

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterAuthorizationViewerUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers">GkeonpremVmwareAdminClusterAuthorizationViewerUsers</a>

---


### GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference <a name="GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterAutoRepairConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---


### GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference <a name="GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus"></a>

```typescript
public resetCpus(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput">cpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus">cpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```typescript
public readonly cpusInput: number;
```

- *Type:* number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterControlPlaneNode;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---


### GkeonpremVmwareAdminClusterFleetList <a name="GkeonpremVmwareAdminClusterFleetList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterFleetOutputReference <a name="GkeonpremVmwareAdminClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">resetSnatPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSnatPool` <a name="resetSnatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```typescript
public resetSnatPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">snatPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool">snatPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `snatPoolInput`<sup>Optional</sup> <a name="snatPoolInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```typescript
public readonly snatPoolInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `snatPool`<sup>Required</sup> <a name="snatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```typescript
public readonly snatPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort">resetAddonsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">resetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">resetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">resetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">resetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddonsNodePort` <a name="resetAddonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort"></a>

```typescript
public resetAddonsNodePort(): void
```

##### `resetControlPlaneNodePort` <a name="resetControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```typescript
public resetControlPlaneNodePort(): void
```

##### `resetIngressHttpNodePort` <a name="resetIngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```typescript
public resetIngressHttpNodePort(): void
```

##### `resetIngressHttpsNodePort` <a name="resetIngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```typescript
public resetIngressHttpsNodePort(): void
```

##### `resetKonnectivityServerNodePort` <a name="resetKonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```typescript
public resetKonnectivityServerNodePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput">addonsNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">controlPlaneNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">ingressHttpNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">ingressHttpsNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">konnectivityServerNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort">addonsNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">controlPlaneNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">ingressHttpNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">ingressHttpsNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">konnectivityServerNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addonsNodePortInput`<sup>Optional</sup> <a name="addonsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput"></a>

```typescript
public readonly addonsNodePortInput: number;
```

- *Type:* number

---

##### `controlPlaneNodePortInput`<sup>Optional</sup> <a name="controlPlaneNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```typescript
public readonly controlPlaneNodePortInput: number;
```

- *Type:* number

---

##### `ingressHttpNodePortInput`<sup>Optional</sup> <a name="ingressHttpNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```typescript
public readonly ingressHttpNodePortInput: number;
```

- *Type:* number

---

##### `ingressHttpsNodePortInput`<sup>Optional</sup> <a name="ingressHttpsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```typescript
public readonly ingressHttpsNodePortInput: number;
```

- *Type:* number

---

##### `konnectivityServerNodePortInput`<sup>Optional</sup> <a name="konnectivityServerNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```typescript
public readonly konnectivityServerNodePortInput: number;
```

- *Type:* number

---

##### `addonsNodePort`<sup>Required</sup> <a name="addonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort"></a>

```typescript
public readonly addonsNodePort: number;
```

- *Type:* number

---

##### `controlPlaneNodePort`<sup>Required</sup> <a name="controlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```typescript
public readonly controlPlaneNodePort: number;
```

- *Type:* number

---

##### `ingressHttpNodePort`<sup>Required</sup> <a name="ingressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```typescript
public readonly ingressHttpNodePort: number;
```

- *Type:* number

---

##### `ingressHttpsNodePort`<sup>Required</sup> <a name="ingressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```typescript
public readonly ingressHttpsNodePort: number;
```

- *Type:* number

---

##### `konnectivityServerNodePort`<sup>Required</sup> <a name="konnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```typescript
public readonly konnectivityServerNodePort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config">putF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig">putMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config">resetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig">resetMetalLbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putF5Config` <a name="putF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config"></a>

```typescript
public putF5Config(value: GkeonpremVmwareAdminClusterLoadBalancerF5Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```typescript
public putManualLbConfig(value: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `putMetalLbConfig` <a name="putMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```typescript
public putMetalLbConfig(value: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```typescript
public putVipConfig(value: GkeonpremVmwareAdminClusterLoadBalancerVipConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `resetF5Config` <a name="resetF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config"></a>

```typescript
public resetF5Config(): void
```

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```typescript
public resetManualLbConfig(): void
```

##### `resetMetalLbConfig` <a name="resetMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```typescript
public resetMetalLbConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config">f5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig">metalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput">f5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput">metalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `f5Config`<sup>Required</sup> <a name="f5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config"></a>

```typescript
public readonly f5Config: GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `metalLbConfig`<sup>Required</sup> <a name="metalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```typescript
public readonly metalLbConfig: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```typescript
public readonly vipConfig: GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `f5ConfigInput`<sup>Optional</sup> <a name="f5ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```typescript
public readonly f5ConfigInput: GkeonpremVmwareAdminClusterLoadBalancerF5Config;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```typescript
public readonly manualLbConfigInput: GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `metalLbConfigInput`<sup>Optional</sup> <a name="metalLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```typescript
public readonly metalLbConfigInput: GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```typescript
public readonly vipConfigInput: GkeonpremVmwareAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip">resetAddonsVip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddonsVip` <a name="resetAddonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip"></a>

```typescript
public resetAddonsVip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput">addonsVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip">addonsVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addonsVipInput`<sup>Optional</sup> <a name="addonsVipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput"></a>

```typescript
public readonly addonsVipInput: string;
```

- *Type:* string

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```typescript
public readonly controlPlaneVipInput: string;
```

- *Type:* string

---

##### `addonsVip`<sup>Required</sup> <a name="addonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip"></a>

```typescript
public readonly addonsVip: string;
```

- *Type:* string

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps">putIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps"></a>

```typescript
public putIps(value: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput">ipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```typescript
public readonly ips: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps</a>[]

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock">putControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock">resetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPlaneIpBlock` <a name="putControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock"></a>

```typescript
public putControlPlaneIpBlock(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `resetControlPlaneIpBlock` <a name="resetControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock"></a>

```typescript
public resetControlPlaneIpBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock">controlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput">controlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneIpBlock`<sup>Required</sup> <a name="controlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock"></a>

```typescript
public readonly controlPlaneIpBlock: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a>

---

##### `controlPlaneIpBlockInput`<sup>Optional</sup> <a name="controlPlaneIpBlockInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```typescript
public readonly controlPlaneIpBlockInput: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">resetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers">resetNtpServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSearchDomains` <a name="resetDnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```typescript
public resetDnsSearchDomains(): void
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```typescript
public resetNtpServers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">dnsSearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">ntpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsSearchDomainsInput`<sup>Optional</sup> <a name="dnsSearchDomainsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```typescript
public readonly dnsSearchDomainsInput: string[];
```

- *Type:* string[]

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```typescript
public readonly ntpServersInput: string[];
```

- *Type:* string[]

---

##### `dnsSearchDomains`<sup>Required</sup> <a name="dnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```typescript
public readonly dnsSearchDomains: string[];
```

- *Type:* string[]

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig">putDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig">putHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig">putHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig">putStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig">resetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig">resetHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig">resetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig">resetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork">resetVcenterNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDhcpIpConfig` <a name="putDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```typescript
public putDhcpIpConfig(value: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `putHaControlPlaneConfig` <a name="putHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig"></a>

```typescript
public putHaControlPlaneConfig(value: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `putHostConfig` <a name="putHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig"></a>

```typescript
public putHostConfig(value: GkeonpremVmwareAdminClusterNetworkConfigHostConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `putStaticIpConfig` <a name="putStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```typescript
public putStaticIpConfig(value: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `resetDhcpIpConfig` <a name="resetDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```typescript
public resetDhcpIpConfig(): void
```

##### `resetHaControlPlaneConfig` <a name="resetHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig"></a>

```typescript
public resetHaControlPlaneConfig(): void
```

##### `resetHostConfig` <a name="resetHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig"></a>

```typescript
public resetHostConfig(): void
```

##### `resetStaticIpConfig` <a name="resetStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```typescript
public resetStaticIpConfig(): void
```

##### `resetVcenterNetwork` <a name="resetVcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```typescript
public resetVcenterNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig">dhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig">haControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig">staticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">dhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput">haControlPlaneConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput">hostConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput">staticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput">vcenterNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork">vcenterNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcpIpConfig`<sup>Required</sup> <a name="dhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```typescript
public readonly dhcpIpConfig: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `haControlPlaneConfig`<sup>Required</sup> <a name="haControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig"></a>

```typescript
public readonly haControlPlaneConfig: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a>

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig"></a>

```typescript
public readonly hostConfig: GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a>

---

##### `staticIpConfig`<sup>Required</sup> <a name="staticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```typescript
public readonly staticIpConfig: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `dhcpIpConfigInput`<sup>Optional</sup> <a name="dhcpIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```typescript
public readonly dhcpIpConfigInput: GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `haControlPlaneConfigInput`<sup>Optional</sup> <a name="haControlPlaneConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput"></a>

```typescript
public readonly haControlPlaneConfigInput: GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `hostConfigInput`<sup>Optional</sup> <a name="hostConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```typescript
public readonly hostConfigInput: GkeonpremVmwareAdminClusterNetworkConfigHostConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `staticIpConfigInput`<sup>Optional</sup> <a name="staticIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```typescript
public readonly staticIpConfigInput: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `vcenterNetworkInput`<sup>Optional</sup> <a name="vcenterNetworkInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```typescript
public readonly vcenterNetworkInput: string;
```

- *Type:* string

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vcenterNetwork`<sup>Required</sup> <a name="vcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```typescript
public readonly vcenterNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">putIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIps` <a name="putIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```typescript
public putIps(value: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">ipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```typescript
public readonly ips: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps</a>[]

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">putIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks">resetIpBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlocks` <a name="putIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```typescript
public putIpBlocks(value: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---

##### `resetIpBlocks` <a name="resetIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks"></a>

```typescript
public resetIpBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">ipBlocks</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">ipBlocksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```typescript
public readonly ipBlocks: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `ipBlocksInput`<sup>Optional</sup> <a name="ipBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```typescript
public readonly ipBlocksInput: IResolvable | GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status"></a>

```typescript
public readonly status: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfigBundles;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion">resetRequiredPlatformVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequiredPlatformVersion` <a name="resetRequiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion"></a>

```typescript
public resetRequiredPlatformVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles">bundles</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput">requiredPlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion">requiredPlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundles`<sup>Required</sup> <a name="bundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles"></a>

```typescript
public readonly bundles: GkeonpremVmwareAdminClusterPlatformConfigBundlesList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a>

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status"></a>

```typescript
public readonly status: GkeonpremVmwareAdminClusterPlatformConfigStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a>

---

##### `requiredPlatformVersionInput`<sup>Optional</sup> <a name="requiredPlatformVersionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput"></a>

```typescript
public readonly requiredPlatformVersionInput: string;
```

- *Type:* string

---

##### `requiredPlatformVersion`<sup>Required</sup> <a name="requiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion"></a>

```typescript
public readonly requiredPlatformVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfigStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPlatformConfigStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a>

---


### GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterPrivateRegistryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---


### GkeonpremVmwareAdminClusterStatusConditionsList <a name="GkeonpremVmwareAdminClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a>

---


### GkeonpremVmwareAdminClusterStatusList <a name="GkeonpremVmwareAdminClusterStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareAdminClusterStatusOutputReference <a name="GkeonpremVmwareAdminClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremVmwareAdminClusterStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a>

---


### GkeonpremVmwareAdminClusterTimeoutsOutputReference <a name="GkeonpremVmwareAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

---


### GkeonpremVmwareAdminClusterVcenterOutputReference <a name="GkeonpremVmwareAdminClusterVcenterOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareAdminCluster } from '@cdktf/provider-google'

new gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData">resetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk">resetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool">resetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName">resetStoragePolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetCaCertData` <a name="resetCaCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData"></a>

```typescript
public resetCaCertData(): void
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetDataDisk` <a name="resetDataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk"></a>

```typescript
public resetDataDisk(): void
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetResourcePool` <a name="resetResourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool"></a>

```typescript
public resetResourcePool(): void
```

##### `resetStoragePolicyName` <a name="resetStoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName"></a>

```typescript
public resetStoragePolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput">caCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput">dataDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput">datastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput">resourcePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput">storagePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData">caCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk">dataDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool">resourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName">storagePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `caCertDataInput`<sup>Optional</sup> <a name="caCertDataInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput"></a>

```typescript
public readonly caCertDataInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `dataDiskInput`<sup>Optional</sup> <a name="dataDiskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput"></a>

```typescript
public readonly dataDiskInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `resourcePoolInput`<sup>Optional</sup> <a name="resourcePoolInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput"></a>

```typescript
public readonly resourcePoolInput: string;
```

- *Type:* string

---

##### `storagePolicyNameInput`<sup>Optional</sup> <a name="storagePolicyNameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```typescript
public readonly storagePolicyNameInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `caCertData`<sup>Required</sup> <a name="caCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData"></a>

```typescript
public readonly caCertData: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `dataDisk`<sup>Required</sup> <a name="dataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk"></a>

```typescript
public readonly dataDisk: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `resourcePool`<sup>Required</sup> <a name="resourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool"></a>

```typescript
public readonly resourcePool: string;
```

- *Type:* string

---

##### `storagePolicyName`<sup>Required</sup> <a name="storagePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName"></a>

```typescript
public readonly storagePolicyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareAdminClusterVcenter;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---



