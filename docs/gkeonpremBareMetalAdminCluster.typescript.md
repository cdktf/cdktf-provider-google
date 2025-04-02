# `gkeonpremBareMetalAdminCluster` Submodule <a name="`gkeonpremBareMetalAdminCluster` Submodule" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremBareMetalAdminCluster <a name="GkeonpremBareMetalAdminCluster" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster google_gkeonprem_bare_metal_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster(scope: Construct, id: string, config: GkeonpremBareMetalAdminClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig">GkeonpremBareMetalAdminClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig">GkeonpremBareMetalAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations">putClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig">putNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig">putSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetBareMetalVersion">resetBareMetalVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetClusterOperations">resetClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetControlPlane">resetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeAccessConfig">resetNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetSecurityConfig">resetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterOperations` <a name="putClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations"></a>

```typescript
public putClusterOperations(value: GkeonpremBareMetalAdminClusterClusterOperations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putClusterOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane"></a>

```typescript
public putControlPlane(value: GkeonpremBareMetalAdminClusterControlPlane): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: GkeonpremBareMetalAdminClusterLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig"></a>

```typescript
public putMaintenanceConfig(value: GkeonpremBareMetalAdminClusterMaintenanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GkeonpremBareMetalAdminClusterNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `putNodeAccessConfig` <a name="putNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig"></a>

```typescript
public putNodeAccessConfig(value: GkeonpremBareMetalAdminClusterNodeAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig"></a>

```typescript
public putNodeConfig(value: GkeonpremBareMetalAdminClusterNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy"></a>

```typescript
public putProxy(value: GkeonpremBareMetalAdminClusterProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---

##### `putSecurityConfig` <a name="putSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig"></a>

```typescript
public putSecurityConfig(value: GkeonpremBareMetalAdminClusterSecurityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage"></a>

```typescript
public putStorage(value: GkeonpremBareMetalAdminClusterStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeonpremBareMetalAdminClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBareMetalVersion` <a name="resetBareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetBareMetalVersion"></a>

```typescript
public resetBareMetalVersion(): void
```

##### `resetClusterOperations` <a name="resetClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetClusterOperations"></a>

```typescript
public resetClusterOperations(): void
```

##### `resetControlPlane` <a name="resetControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetControlPlane"></a>

```typescript
public resetControlPlane(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetMaintenanceConfig"></a>

```typescript
public resetMaintenanceConfig(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetNodeAccessConfig` <a name="resetNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeAccessConfig"></a>

```typescript
public resetNodeAccessConfig(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetSecurityConfig` <a name="resetSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetSecurityConfig"></a>

```typescript
public resetSecurityConfig(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremBareMetalAdminCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremBareMetalAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremBareMetalAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperations">clusterOperations</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference">GkeonpremBareMetalAdminClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList">GkeonpremBareMetalAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.localName">localName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfig">nodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference">GkeonpremBareMetalAdminClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference">GkeonpremBareMetalAdminClusterProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList">GkeonpremBareMetalAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference">GkeonpremBareMetalAdminClusterStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference">GkeonpremBareMetalAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.validationCheck">validationCheck</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList">GkeonpremBareMetalAdminClusterValidationCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersionInput">bareMetalVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperationsInput">clusterOperationsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput">nodeAccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfigInput">securityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersion">bareMetalVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterOperations`<sup>Required</sup> <a name="clusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperations"></a>

```typescript
public readonly clusterOperations: GkeonpremBareMetalAdminClusterClusterOperationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference">GkeonpremBareMetalAdminClusterClusterOperationsOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlane"></a>

```typescript
public readonly controlPlane: GkeonpremBareMetalAdminClusterControlPlaneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference">GkeonpremBareMetalAdminClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.fleet"></a>

```typescript
public readonly fleet: GkeonpremBareMetalAdminClusterFleetList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList">GkeonpremBareMetalAdminClusterFleetList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GkeonpremBareMetalAdminClusterLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerOutputReference</a>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.localName"></a>

```typescript
public readonly localName: string;
```

- *Type:* string

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference">GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfig"></a>

```typescript
public readonly networkConfig: GkeonpremBareMetalAdminClusterNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigOutputReference</a>

---

##### `nodeAccessConfig`<sup>Required</sup> <a name="nodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfig"></a>

```typescript
public readonly nodeAccessConfig: GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference">GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GkeonpremBareMetalAdminClusterNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference">GkeonpremBareMetalAdminClusterNodeConfigOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxy"></a>

```typescript
public readonly proxy: GkeonpremBareMetalAdminClusterProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference">GkeonpremBareMetalAdminClusterProxyOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `securityConfig`<sup>Required</sup> <a name="securityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfig"></a>

```typescript
public readonly securityConfig: GkeonpremBareMetalAdminClusterSecurityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.status"></a>

```typescript
public readonly status: GkeonpremBareMetalAdminClusterStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList">GkeonpremBareMetalAdminClusterStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storage"></a>

```typescript
public readonly storage: GkeonpremBareMetalAdminClusterStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference">GkeonpremBareMetalAdminClusterStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremBareMetalAdminClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference">GkeonpremBareMetalAdminClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `validationCheck`<sup>Required</sup> <a name="validationCheck" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.validationCheck"></a>

```typescript
public readonly validationCheck: GkeonpremBareMetalAdminClusterValidationCheckList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList">GkeonpremBareMetalAdminClusterValidationCheckList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalVersionInput`<sup>Optional</sup> <a name="bareMetalVersionInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersionInput"></a>

```typescript
public readonly bareMetalVersionInput: string;
```

- *Type:* string

---

##### `clusterOperationsInput`<sup>Optional</sup> <a name="clusterOperationsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.clusterOperationsInput"></a>

```typescript
public readonly clusterOperationsInput: GkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: GkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: GkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.maintenanceConfigInput"></a>

```typescript
public readonly maintenanceConfigInput: GkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---

##### `nodeAccessConfigInput`<sup>Optional</sup> <a name="nodeAccessConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeAccessConfigInput"></a>

```typescript
public readonly nodeAccessConfigInput: GkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: GkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.proxyInput"></a>

```typescript
public readonly proxyInput: GkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---

##### `securityConfigInput`<sup>Optional</sup> <a name="securityConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.securityConfigInput"></a>

```typescript
public readonly securityConfigInput: GkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.storageInput"></a>

```typescript
public readonly storageInput: GkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bareMetalVersion`<sup>Required</sup> <a name="bareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.bareMetalVersion"></a>

```typescript
public readonly bareMetalVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremBareMetalAdminClusterClusterOperations <a name="GkeonpremBareMetalAdminClusterClusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterClusterOperations: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs">enableApplicationLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). |

---

##### `enableApplicationLogs`<sup>Optional</sup> <a name="enableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations.property.enableApplicationLogs"></a>

```typescript
public readonly enableApplicationLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#enable_application_logs GkeonpremBareMetalAdminCluster#enable_application_logs}

---

### GkeonpremBareMetalAdminClusterConfig <a name="GkeonpremBareMetalAdminClusterConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.name">name</a></code> | <code>string</code> | The bare metal admin cluster name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion">bareMetalVersion</a></code> | <code>string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.clusterOperations">clusterOperations</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | cluster_operations block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.description">description</a></code> | <code>string</code> | A human readable description of this Bare Metal Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#id GkeonpremBareMetalAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig">nodeAccessConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | node_access_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#project GkeonpremBareMetalAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.securityConfig">securityConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#location GkeonpremBareMetalAdminCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The bare metal admin cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#name GkeonpremBareMetalAdminCluster#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the Bare Metal Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#annotations GkeonpremBareMetalAdminCluster#annotations}

---

##### `bareMetalVersion`<sup>Optional</sup> <a name="bareMetalVersion" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.bareMetalVersion"></a>

```typescript
public readonly bareMetalVersion: string;
```

- *Type:* string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#bare_metal_version GkeonpremBareMetalAdminCluster#bare_metal_version}

---

##### `clusterOperations`<sup>Optional</sup> <a name="clusterOperations" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.clusterOperations"></a>

```typescript
public readonly clusterOperations: GkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

cluster_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#cluster_operations GkeonpremBareMetalAdminCluster#cluster_operations}

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.controlPlane"></a>

```typescript
public readonly controlPlane: GkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane GkeonpremBareMetalAdminCluster#control_plane}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human readable description of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#description GkeonpremBareMetalAdminCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#id GkeonpremBareMetalAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: GkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#load_balancer GkeonpremBareMetalAdminCluster#load_balancer}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: GkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_config GkeonpremBareMetalAdminCluster#maintenance_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#network_config GkeonpremBareMetalAdminCluster#network_config}

---

##### `nodeAccessConfig`<sup>Optional</sup> <a name="nodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeAccessConfig"></a>

```typescript
public readonly nodeAccessConfig: GkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

node_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_access_config GkeonpremBareMetalAdminCluster#node_access_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_config GkeonpremBareMetalAdminCluster#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#project GkeonpremBareMetalAdminCluster#project}.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.proxy"></a>

```typescript
public readonly proxy: GkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#proxy GkeonpremBareMetalAdminCluster#proxy}

---

##### `securityConfig`<sup>Optional</sup> <a name="securityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.securityConfig"></a>

```typescript
public readonly securityConfig: GkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#security_config GkeonpremBareMetalAdminCluster#security_config}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.storage"></a>

```typescript
public readonly storage: GkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage GkeonpremBareMetalAdminCluster#storage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#timeouts GkeonpremBareMetalAdminCluster#timeouts}

---

### GkeonpremBareMetalAdminClusterControlPlane <a name="GkeonpremBareMetalAdminClusterControlPlane" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlane: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig">controlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | control_plane_node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs">apiServerArgs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | api_server_args block. |

---

##### `controlPlaneNodePoolConfig`<sup>Required</sup> <a name="controlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.controlPlaneNodePoolConfig"></a>

```typescript
public readonly controlPlaneNodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

control_plane_node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_node_pool_config GkeonpremBareMetalAdminCluster#control_plane_node_pool_config}

---

##### `apiServerArgs`<sup>Optional</sup> <a name="apiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane.property.apiServerArgs"></a>

```typescript
public readonly apiServerArgs: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

api_server_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#api_server_args GkeonpremBareMetalAdminCluster#api_server_args}

---

### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlaneApiServerArgs: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument">argument</a></code> | <code>string</code> | The argument name as it appears on the API Server command line please make sure to remove the leading dashes. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value">value</a></code> | <code>string</code> | The value of the arg as it will be passed to the API Server command line. |

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.argument"></a>

```typescript
public readonly argument: string;
```

- *Type:* string

The argument name as it appears on the API Server command line please make sure to remove the leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#argument GkeonpremBareMetalAdminCluster#argument}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the arg as it will be passed to the API Server command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | node_pool_config block. |

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_pool_config GkeonpremBareMetalAdminCluster#node_pool_config}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs">nodeConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  - http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}

---

##### `nodeConfigs`<sup>Optional</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_configs GkeonpremBareMetalAdminCluster#node_configs}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#operating_system GkeonpremBareMetalAdminCluster#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#taints GkeonpremBareMetalAdminCluster#taints}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp">nodeIp</a></code> | <code>string</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:
  - http://kubernetes.io/v1.1/docs/user-guide/labels.html
An object containing a list of "key": value pairs.
For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}

---

##### `nodeIp`<sup>Optional</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#node_ip GkeonpremBareMetalAdminCluster#node_ip}

---

### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#effect GkeonpremBareMetalAdminCluster#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#key GkeonpremBareMetalAdminCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}

---

### GkeonpremBareMetalAdminClusterFleet <a name="GkeonpremBareMetalAdminClusterFleet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterFleet: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet = { ... }
```


### GkeonpremBareMetalAdminClusterLoadBalancer <a name="GkeonpremBareMetalAdminClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterLoadBalancer: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig">portConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | port_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |

---

##### `portConfig`<sup>Required</sup> <a name="portConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.portConfig"></a>

```typescript
public readonly portConfig: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

port_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#port_config GkeonpremBareMetalAdminCluster#port_config}

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.vipConfig"></a>

```typescript
public readonly vipConfig: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#vip_config GkeonpremBareMetalAdminCluster#vip_config}

---

##### `manualLbConfig`<sup>Optional</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#manual_lb_config GkeonpremBareMetalAdminCluster#manual_lb_config}

---

### GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether manual load balancing is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether manual load balancing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#enabled GkeonpremBareMetalAdminCluster#enabled}

---

### GkeonpremBareMetalAdminClusterLoadBalancerPortConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerPortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterLoadBalancerPortConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort">controlPlaneLoadBalancerPort</a></code> | <code>number</code> | The port that control plane hosted load balancers will listen on. |

---

##### `controlPlaneLoadBalancerPort`<sup>Required</sup> <a name="controlPlaneLoadBalancerPort" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig.property.controlPlaneLoadBalancerPort"></a>

```typescript
public readonly controlPlaneLoadBalancerPort: number;
```

- *Type:* number

The port that control plane hosted load balancers will listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_load_balancer_port GkeonpremBareMetalAdminCluster#control_plane_load_balancer_port}

---

### GkeonpremBareMetalAdminClusterLoadBalancerVipConfig <a name="GkeonpremBareMetalAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterLoadBalancerVipConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster. |

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_vip GkeonpremBareMetalAdminCluster#control_plane_vip}

---

### GkeonpremBareMetalAdminClusterMaintenanceConfig <a name="GkeonpremBareMetalAdminClusterMaintenanceConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterMaintenanceConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks">maintenanceAddressCidrBlocks</a></code> | <code>string[]</code> | All IPv4 address from these ranges will be placed into maintenance mode. |

---

##### `maintenanceAddressCidrBlocks`<sup>Required</sup> <a name="maintenanceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig.property.maintenanceAddressCidrBlocks"></a>

```typescript
public readonly maintenanceAddressCidrBlocks: string[];
```

- *Type:* string[]

All IPv4 address from these ranges will be placed into maintenance mode.

Nodes in maintenance mode will be cordoned and drained. When both of these
are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
on the node resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_address_cidr_blocks GkeonpremBareMetalAdminCluster#maintenance_address_cidr_blocks}

---

### GkeonpremBareMetalAdminClusterNetworkConfig <a name="GkeonpremBareMetalAdminClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterNetworkConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr">islandModeCidr</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | island_mode_cidr block. |

---

##### `islandModeCidr`<sup>Optional</sup> <a name="islandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig.property.islandModeCidr"></a>

```typescript
public readonly islandModeCidr: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

island_mode_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#island_mode_cidr GkeonpremBareMetalAdminCluster#island_mode_cidr}

---

### GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr <a name="GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#pod_address_cidr_blocks GkeonpremBareMetalAdminCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#service_address_cidr_blocks GkeonpremBareMetalAdminCluster#service_address_cidr_blocks}

---

### GkeonpremBareMetalAdminClusterNodeAccessConfig <a name="GkeonpremBareMetalAdminClusterNodeAccessConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterNodeAccessConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser">loginUser</a></code> | <code>string</code> | LoginUser is the user name used to access node machines. It defaults to "root" if not set. |

---

##### `loginUser`<sup>Optional</sup> <a name="loginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig.property.loginUser"></a>

```typescript
public readonly loginUser: string;
```

- *Type:* string

LoginUser is the user name used to access node machines. It defaults to "root" if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#login_user GkeonpremBareMetalAdminCluster#login_user}

---

### GkeonpremBareMetalAdminClusterNodeConfig <a name="GkeonpremBareMetalAdminClusterNodeConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterNodeConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods a node can run. |

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods a node can run.

The size of the CIDR range
assigned to the node will be derived from this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#max_pods_per_node GkeonpremBareMetalAdminCluster#max_pods_per_node}

---

### GkeonpremBareMetalAdminClusterProxy <a name="GkeonpremBareMetalAdminClusterProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterProxy: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.uri">uri</a></code> | <code>string</code> | Specifies the address of your proxy server. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.noProxy">noProxy</a></code> | <code>string[]</code> | A list of IPs, hostnames, and domains that should skip the proxy. For example: ["127.0.0.1", "example.com", ".corp", "localhost"]. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specifies the address of your proxy server.

For Example: http://domain
WARNING: Do not provide credentials in the format
of http://(username:password@)domain these will be rejected by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#uri GkeonpremBareMetalAdminCluster#uri}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy.property.noProxy"></a>

```typescript
public readonly noProxy: string[];
```

- *Type:* string[]

A list of IPs, hostnames, and domains that should skip the proxy. For example: ["127.0.0.1", "example.com", ".corp", "localhost"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#no_proxy GkeonpremBareMetalAdminCluster#no_proxy}

---

### GkeonpremBareMetalAdminClusterSecurityConfig <a name="GkeonpremBareMetalAdminClusterSecurityConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterSecurityConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | authorization block. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig.property.authorization"></a>

```typescript
public readonly authorization: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#authorization GkeonpremBareMetalAdminCluster#authorization}

---

### GkeonpremBareMetalAdminClusterSecurityConfigAuthorization <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterSecurityConfigAuthorization: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers">adminUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | admin_users block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: IResolvable | GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#admin_users GkeonpremBareMetalAdminCluster#admin_users}

---

### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#username GkeonpremBareMetalAdminCluster#username}

---

### GkeonpremBareMetalAdminClusterStatus <a name="GkeonpremBareMetalAdminClusterStatus" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStatus: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus = { ... }
```


### GkeonpremBareMetalAdminClusterStatusConditions <a name="GkeonpremBareMetalAdminClusterStatusConditions" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStatusConditions: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions = { ... }
```


### GkeonpremBareMetalAdminClusterStorage <a name="GkeonpremBareMetalAdminClusterStorage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStorage: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig">lvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | lvp_node_mounts_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig">lvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | lvp_share_config block. |

---

##### `lvpNodeMountsConfig`<sup>Required</sup> <a name="lvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpNodeMountsConfig"></a>

```typescript
public readonly lvpNodeMountsConfig: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

lvp_node_mounts_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_node_mounts_config GkeonpremBareMetalAdminCluster#lvp_node_mounts_config}

---

##### `lvpShareConfig`<sup>Required</sup> <a name="lvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage.property.lvpShareConfig"></a>

```typescript
public readonly lvpShareConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

lvp_share_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_share_config GkeonpremBareMetalAdminCluster#lvp_share_config}

---

### GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path">path</a></code> | <code>string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The StorageClass name that PVs will be created with. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}

---

### GkeonpremBareMetalAdminClusterStorageLvpShareConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStorageLvpShareConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig">lvpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | lvp_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount">sharedPathPvCount</a></code> | <code>number</code> | The number of subdirectories to create under path. |

---

##### `lvpConfig`<sup>Required</sup> <a name="lvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.lvpConfig"></a>

```typescript
public readonly lvpConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

lvp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_config GkeonpremBareMetalAdminCluster#lvp_config}

---

##### `sharedPathPvCount`<sup>Optional</sup> <a name="sharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig.property.sharedPathPvCount"></a>

```typescript
public readonly sharedPathPvCount: number;
```

- *Type:* number

The number of subdirectories to create under path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#shared_path_pv_count GkeonpremBareMetalAdminCluster#shared_path_pv_count}

---

### GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path">path</a></code> | <code>string</code> | The host machine path. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The StorageClass name that PVs will be created with. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The host machine path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The StorageClass name that PVs will be created with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}

---

### GkeonpremBareMetalAdminClusterTimeouts <a name="GkeonpremBareMetalAdminClusterTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterTimeouts: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#create GkeonpremBareMetalAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#delete GkeonpremBareMetalAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#update GkeonpremBareMetalAdminCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#create GkeonpremBareMetalAdminCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#delete GkeonpremBareMetalAdminCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/gkeonprem_bare_metal_admin_cluster#update GkeonpremBareMetalAdminCluster#update}.

---

### GkeonpremBareMetalAdminClusterValidationCheck <a name="GkeonpremBareMetalAdminClusterValidationCheck" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterValidationCheck: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck = { ... }
```


### GkeonpremBareMetalAdminClusterValidationCheckStatus <a name="GkeonpremBareMetalAdminClusterValidationCheckStatus" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterValidationCheckStatus: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus = { ... }
```


### GkeonpremBareMetalAdminClusterValidationCheckStatusResult <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResult" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

const gkeonpremBareMetalAdminClusterValidationCheckStatusResult: gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GkeonpremBareMetalAdminClusterClusterOperationsOutputReference <a name="GkeonpremBareMetalAdminClusterClusterOperationsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs">resetEnableApplicationLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableApplicationLogs` <a name="resetEnableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.resetEnableApplicationLogs"></a>

```typescript
public resetEnableApplicationLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput">enableApplicationLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs">enableApplicationLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableApplicationLogsInput`<sup>Optional</sup> <a name="enableApplicationLogsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogsInput"></a>

```typescript
public readonly enableApplicationLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableApplicationLogs`<sup>Required</sup> <a name="enableApplicationLogs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.enableApplicationLogs"></a>

```typescript
public readonly enableApplicationLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterClusterOperations;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterClusterOperations">GkeonpremBareMetalAdminClusterClusterOperations</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---


### GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput">argumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument">argument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentInput`<sup>Optional</sup> <a name="argumentInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argumentInput"></a>

```typescript
public readonly argumentInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.argument"></a>

```typescript
public readonly argument: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp">resetNodeIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNodeIp` <a name="resetNodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```typescript
public resetNodeIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">nodeIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp">nodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIpInput`<sup>Optional</sup> <a name="nodeIpInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```typescript
public readonly nodeIpInput: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeIp`<sup>Required</sup> <a name="nodeIp" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```typescript
public readonly nodeIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs">putNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs">resetNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfigs` <a name="putNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs"></a>

```typescript
public putNodeConfigs(value: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNodeConfigs` <a name="resetNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetNodeConfigs"></a>

```typescript
public resetNodeConfigs(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs">nodeConfigs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput">nodeConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigs"></a>

```typescript
public readonly nodeConfigs: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taints"></a>

```typescript
public readonly taints: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeConfigsInput`<sup>Optional</sup> <a name="nodeConfigsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```typescript
public readonly nodeConfigsInput: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs</a>[]

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>[]

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig"></a>

```typescript
public putNodePoolConfig(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference</a>

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.nodePoolConfigInput"></a>

```typescript
public readonly nodePoolConfigInput: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---


### GkeonpremBareMetalAdminClusterControlPlaneOutputReference <a name="GkeonpremBareMetalAdminClusterControlPlaneOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs">putApiServerArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig">putControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs">resetApiServerArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiServerArgs` <a name="putApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs"></a>

```typescript
public putApiServerArgs(value: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putApiServerArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---

##### `putControlPlaneNodePoolConfig` <a name="putControlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig"></a>

```typescript
public putControlPlaneNodePoolConfig(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.putControlPlaneNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `resetApiServerArgs` <a name="resetApiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.resetApiServerArgs"></a>

```typescript
public resetApiServerArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs">apiServerArgs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig">controlPlaneNodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput">apiServerArgsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput">controlPlaneNodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiServerArgs`<sup>Required</sup> <a name="apiServerArgs" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgs"></a>

```typescript
public readonly apiServerArgs: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList</a>

---

##### `controlPlaneNodePoolConfig`<sup>Required</sup> <a name="controlPlaneNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfig"></a>

```typescript
public readonly controlPlaneNodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference</a>

---

##### `apiServerArgsInput`<sup>Optional</sup> <a name="apiServerArgsInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.apiServerArgsInput"></a>

```typescript
public readonly apiServerArgsInput: IResolvable | GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs">GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs</a>[]

---

##### `controlPlaneNodePoolConfigInput`<sup>Optional</sup> <a name="controlPlaneNodePoolConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.controlPlaneNodePoolConfigInput"></a>

```typescript
public readonly controlPlaneNodePoolConfigInput: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig">GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlaneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterControlPlane">GkeonpremBareMetalAdminClusterControlPlane</a>

---


### GkeonpremBareMetalAdminClusterFleetList <a name="GkeonpremBareMetalAdminClusterFleetList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterFleetOutputReference <a name="GkeonpremBareMetalAdminClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet">GkeonpremBareMetalAdminClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterFleet">GkeonpremBareMetalAdminClusterFleet</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig">putManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig">putPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig">putVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig">resetManualLbConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManualLbConfig` <a name="putManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```typescript
public putManualLbConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `putPortConfig` <a name="putPortConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig"></a>

```typescript
public putPortConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putPortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `putVipConfig` <a name="putVipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```typescript
public putVipConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `resetManualLbConfig` <a name="resetManualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```typescript
public resetManualLbConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig">manualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig">portConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig">vipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">manualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput">portConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput">vipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualLbConfig`<sup>Required</sup> <a name="manualLbConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```typescript
public readonly manualLbConfig: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `portConfig`<sup>Required</sup> <a name="portConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfig"></a>

```typescript
public readonly portConfig: GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference</a>

---

##### `vipConfig`<sup>Required</sup> <a name="vipConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```typescript
public readonly vipConfig: GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `manualLbConfigInput`<sup>Optional</sup> <a name="manualLbConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```typescript
public readonly manualLbConfigInput: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig">GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig</a>

---

##### `portConfigInput`<sup>Optional</sup> <a name="portConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.portConfigInput"></a>

```typescript
public readonly portConfigInput: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---

##### `vipConfigInput`<sup>Optional</sup> <a name="vipConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```typescript
public readonly vipConfigInput: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancer">GkeonpremBareMetalAdminClusterLoadBalancer</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput">controlPlaneLoadBalancerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort">controlPlaneLoadBalancerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneLoadBalancerPortInput`<sup>Optional</sup> <a name="controlPlaneLoadBalancerPortInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPortInput"></a>

```typescript
public readonly controlPlaneLoadBalancerPortInput: number;
```

- *Type:* number

---

##### `controlPlaneLoadBalancerPort`<sup>Required</sup> <a name="controlPlaneLoadBalancerPort" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.controlPlaneLoadBalancerPort"></a>

```typescript
public readonly controlPlaneLoadBalancerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerPortConfig">GkeonpremBareMetalAdminClusterLoadBalancerPortConfig</a>

---


### GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">controlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">controlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneVipInput`<sup>Optional</sup> <a name="controlPlaneVipInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```typescript
public readonly controlPlaneVipInput: string;
```

- *Type:* string

---

##### `controlPlaneVip`<sup>Required</sup> <a name="controlPlaneVip" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```typescript
public readonly controlPlaneVip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterLoadBalancerVipConfig">GkeonpremBareMetalAdminClusterLoadBalancerVipConfig</a>

---


### GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference <a name="GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput">maintenanceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks">maintenanceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceAddressCidrBlocksInput`<sup>Optional</sup> <a name="maintenanceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocksInput"></a>

```typescript
public readonly maintenanceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `maintenanceAddressCidrBlocks`<sup>Required</sup> <a name="maintenanceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.maintenanceAddressCidrBlocks"></a>

```typescript
public readonly maintenanceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterMaintenanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterMaintenanceConfig">GkeonpremBareMetalAdminClusterMaintenanceConfig</a>

---


### GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference <a name="GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---


### GkeonpremBareMetalAdminClusterNetworkConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr">putIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr">resetIslandModeCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIslandModeCidr` <a name="putIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr"></a>

```typescript
public putIslandModeCidr(value: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.putIslandModeCidr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `resetIslandModeCidr` <a name="resetIslandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.resetIslandModeCidr"></a>

```typescript
public resetIslandModeCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr">islandModeCidr</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput">islandModeCidrInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `islandModeCidr`<sup>Required</sup> <a name="islandModeCidr" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidr"></a>

```typescript
public readonly islandModeCidr: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference</a>

---

##### `islandModeCidrInput`<sup>Optional</sup> <a name="islandModeCidrInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.islandModeCidrInput"></a>

```typescript
public readonly islandModeCidrInput: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr">GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNetworkConfig">GkeonpremBareMetalAdminClusterNetworkConfig</a>

---


### GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser">resetLoginUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginUser` <a name="resetLoginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.resetLoginUser"></a>

```typescript
public resetLoginUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput">loginUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser">loginUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loginUserInput`<sup>Optional</sup> <a name="loginUserInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUserInput"></a>

```typescript
public readonly loginUserInput: string;
```

- *Type:* string

---

##### `loginUser`<sup>Required</sup> <a name="loginUser" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.loginUser"></a>

```typescript
public readonly loginUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterNodeAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeAccessConfig">GkeonpremBareMetalAdminClusterNodeAccessConfig</a>

---


### GkeonpremBareMetalAdminClusterNodeConfigOutputReference <a name="GkeonpremBareMetalAdminClusterNodeConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterNodeConfig">GkeonpremBareMetalAdminClusterNodeConfig</a>

---


### GkeonpremBareMetalAdminClusterProxyOutputReference <a name="GkeonpremBareMetalAdminClusterProxyOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy">resetNoProxy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput">noProxyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy">noProxy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string[];
```

- *Type:* string[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `noProxy`<sup>Required</sup> <a name="noProxy" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.noProxy"></a>

```typescript
public readonly noProxy: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterProxy;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterProxy">GkeonpremBareMetalAdminClusterProxy</a>

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>

---


### GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: IResolvable | GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList</a>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: IResolvable | GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---


### GkeonpremBareMetalAdminClusterSecurityConfigOutputReference <a name="GkeonpremBareMetalAdminClusterSecurityConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization"></a>

```typescript
public putAuthorization(value: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorization"></a>

```typescript
public readonly authorization: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference">GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigAuthorization">GkeonpremBareMetalAdminClusterSecurityConfigAuthorization</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterSecurityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterSecurityConfig">GkeonpremBareMetalAdminClusterSecurityConfig</a>

---


### GkeonpremBareMetalAdminClusterStatusConditionsList <a name="GkeonpremBareMetalAdminClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterStatusConditionsOutputReference <a name="GkeonpremBareMetalAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions">GkeonpremBareMetalAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditions">GkeonpremBareMetalAdminClusterStatusConditions</a>

---


### GkeonpremBareMetalAdminClusterStatusList <a name="GkeonpremBareMetalAdminClusterStatusList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterStatusOutputReference <a name="GkeonpremBareMetalAdminClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList">GkeonpremBareMetalAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus">GkeonpremBareMetalAdminClusterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremBareMetalAdminClusterStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusConditionsList">GkeonpremBareMetalAdminClusterStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStatus">GkeonpremBareMetalAdminClusterStatus</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference <a name="GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig">putLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount">resetSharedPathPvCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLvpConfig` <a name="putLvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig"></a>

```typescript
public putLvpConfig(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.putLvpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `resetSharedPathPvCount` <a name="resetSharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.resetSharedPathPvCount"></a>

```typescript
public resetSharedPathPvCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig">lvpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput">lvpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput">sharedPathPvCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount">sharedPathPvCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lvpConfig`<sup>Required</sup> <a name="lvpConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfig"></a>

```typescript
public readonly lvpConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference</a>

---

##### `lvpConfigInput`<sup>Optional</sup> <a name="lvpConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.lvpConfigInput"></a>

```typescript
public readonly lvpConfigInput: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig</a>

---

##### `sharedPathPvCountInput`<sup>Optional</sup> <a name="sharedPathPvCountInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCountInput"></a>

```typescript
public readonly sharedPathPvCountInput: number;
```

- *Type:* number

---

##### `sharedPathPvCount`<sup>Required</sup> <a name="sharedPathPvCount" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.sharedPathPvCount"></a>

```typescript
public readonly sharedPathPvCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


### GkeonpremBareMetalAdminClusterStorageOutputReference <a name="GkeonpremBareMetalAdminClusterStorageOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig">putLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig">putLvpShareConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLvpNodeMountsConfig` <a name="putLvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig"></a>

```typescript
public putLvpNodeMountsConfig(value: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpNodeMountsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `putLvpShareConfig` <a name="putLvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig"></a>

```typescript
public putLvpShareConfig(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.putLvpShareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig">lvpNodeMountsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig">lvpShareConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput">lvpNodeMountsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput">lvpShareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lvpNodeMountsConfig`<sup>Required</sup> <a name="lvpNodeMountsConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfig"></a>

```typescript
public readonly lvpNodeMountsConfig: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference</a>

---

##### `lvpShareConfig`<sup>Required</sup> <a name="lvpShareConfig" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfig"></a>

```typescript
public readonly lvpShareConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference">GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference</a>

---

##### `lvpNodeMountsConfigInput`<sup>Optional</sup> <a name="lvpNodeMountsConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpNodeMountsConfigInput"></a>

```typescript
public readonly lvpNodeMountsConfigInput: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig">GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig</a>

---

##### `lvpShareConfigInput`<sup>Optional</sup> <a name="lvpShareConfigInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.lvpShareConfigInput"></a>

```typescript
public readonly lvpShareConfigInput: GkeonpremBareMetalAdminClusterStorageLvpShareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageLvpShareConfig">GkeonpremBareMetalAdminClusterStorageLvpShareConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterStorage;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterStorage">GkeonpremBareMetalAdminClusterStorage</a>

---


### GkeonpremBareMetalAdminClusterTimeoutsOutputReference <a name="GkeonpremBareMetalAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremBareMetalAdminClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterTimeouts">GkeonpremBareMetalAdminClusterTimeouts</a>

---


### GkeonpremBareMetalAdminClusterValidationCheckList <a name="GkeonpremBareMetalAdminClusterValidationCheckList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterValidationCheckOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario">scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList">GkeonpremBareMetalAdminClusterValidationCheckStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck">GkeonpremBareMetalAdminClusterValidationCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.scenario"></a>

```typescript
public readonly scenario: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.status"></a>

```typescript
public readonly status: GkeonpremBareMetalAdminClusterValidationCheckStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList">GkeonpremBareMetalAdminClusterValidationCheckStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterValidationCheck;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheck">GkeonpremBareMetalAdminClusterValidationCheck</a>

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusList <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result">result</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus">GkeonpremBareMetalAdminClusterValidationCheckStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.result"></a>

```typescript
public readonly result: GkeonpremBareMetalAdminClusterValidationCheckStatusResultList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList">GkeonpremBareMetalAdminClusterValidationCheckStatusResultList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterValidationCheckStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatus">GkeonpremBareMetalAdminClusterValidationCheckStatus</a>

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusResultList <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResultList" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get"></a>

```typescript
public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference <a name="GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer"></a>

```typescript
import { gkeonpremBareMetalAdminCluster } from '@cdktf/provider-google'

new gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult">GkeonpremBareMetalAdminClusterValidationCheckStatusResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremBareMetalAdminClusterValidationCheckStatusResult;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalAdminCluster.GkeonpremBareMetalAdminClusterValidationCheckStatusResult">GkeonpremBareMetalAdminClusterValidationCheckStatusResult</a>

---



