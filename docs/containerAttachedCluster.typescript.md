# `containerAttachedCluster` Submodule <a name="`containerAttachedCluster` Submodule" id="@cdktf/provider-google.containerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAttachedCluster <a name="ContainerAttachedCluster" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedCluster(scope: Construct, id: string, config: ContainerAttachedClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig">ContainerAttachedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig">ContainerAttachedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig">putMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig">putOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig">putSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig">resetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetSecurityPostureConfig">resetSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: ContainerAttachedClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: ContainerAttachedClusterBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet"></a>

```typescript
public putFleet(value: ContainerAttachedClusterFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: ContainerAttachedClusterLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---

##### `putMonitoringConfig` <a name="putMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig"></a>

```typescript
public putMonitoringConfig(value: ContainerAttachedClusterMonitoringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---

##### `putOidcConfig` <a name="putOidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig"></a>

```typescript
public putOidcConfig(value: ContainerAttachedClusterOidcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig"></a>

```typescript
public putProxyConfig(value: ContainerAttachedClusterProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---

##### `putSecurityPostureConfig` <a name="putSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig"></a>

```typescript
public putSecurityPostureConfig(value: ContainerAttachedClusterSecurityPostureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAttachedClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetMonitoringConfig` <a name="resetMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig"></a>

```typescript
public resetMonitoringConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetSecurityPostureConfig` <a name="resetSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetSecurityPostureConfig"></a>

```typescript
public resetSecurityPostureConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAttachedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

containerAttachedCluster.ContainerAttachedCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

containerAttachedCluster.ContainerAttachedCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

containerAttachedCluster.ContainerAttachedCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAttachedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAttachedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAttachedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAttachedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion">clusterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference">ContainerAttachedClusterProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference">ContainerAttachedClusterSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput">distributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput">monitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput">oidcConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfigInput">securityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization"></a>

```typescript
public readonly authorization: ContainerAttachedClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: ContainerAttachedClusterBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `clusterRegion`<sup>Required</sup> <a name="clusterRegion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion"></a>

```typescript
public readonly clusterRegion: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors"></a>

```typescript
public readonly errors: ContainerAttachedClusterErrorsList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a>

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet"></a>

```typescript
public readonly fleet: ContainerAttachedClusterFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: ContainerAttachedClusterLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `monitoringConfig`<sup>Required</sup> <a name="monitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig"></a>

```typescript
public readonly monitoringConfig: ContainerAttachedClusterMonitoringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig"></a>

```typescript
public readonly oidcConfig: ContainerAttachedClusterOidcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAttachedClusterProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference">ContainerAttachedClusterProxyConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `securityPostureConfig`<sup>Required</sup> <a name="securityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: ContainerAttachedClusterSecurityPostureConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference">ContainerAttachedClusterSecurityPostureConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAttachedClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig"></a>

```typescript
public readonly workloadIdentityConfig: ContainerAttachedClusterWorkloadIdentityConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: ContainerAttachedClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: ContainerAttachedClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributionInput`<sup>Optional</sup> <a name="distributionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput"></a>

```typescript
public readonly distributionInput: string;
```

- *Type:* string

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput"></a>

```typescript
public readonly fleetInput: ContainerAttachedClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: ContainerAttachedClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---

##### `monitoringConfigInput`<sup>Optional</sup> <a name="monitoringConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput"></a>

```typescript
public readonly monitoringConfigInput: ContainerAttachedClusterMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oidcConfigInput`<sup>Optional</sup> <a name="oidcConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput"></a>

```typescript
public readonly oidcConfigInput: ContainerAttachedClusterOidcConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: ContainerAttachedClusterProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---

##### `securityPostureConfigInput`<sup>Optional</sup> <a name="securityPostureConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.securityPostureConfigInput"></a>

```typescript
public readonly securityPostureConfigInput: ContainerAttachedClusterSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAttachedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAttachedClusterAuthorization <a name="ContainerAttachedClusterAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterAuthorization: containerAttachedCluster.ContainerAttachedClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>string[]</code> | Groups that can perform operations as a cluster admin. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>string[]</code> | Users that can perform operations as a cluster admin. |

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminGroups"></a>

```typescript
public readonly adminGroups: string[];
```

- *Type:* string[]

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#admin_groups ContainerAttachedCluster#admin_groups}

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: string[];
```

- *Type:* string[]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#admin_users ContainerAttachedCluster#admin_users}

---

### ContainerAttachedClusterBinaryAuthorization <a name="ContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterBinaryAuthorization: containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#evaluation_mode ContainerAttachedCluster#evaluation_mode}

---

### ContainerAttachedClusterConfig <a name="ContainerAttachedClusterConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterConfig: containerAttachedCluster.ContainerAttachedClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution">distribution</a></code> | <code>string</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description">description</a></code> | <code>string</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#distribution ContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet"></a>

```typescript
public readonly fleet: ContainerAttachedClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#fleet ContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#location ContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig"></a>

```typescript
public readonly oidcConfig: ContainerAttachedClusterOidcConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#oidc_config ContainerAttachedCluster#oidc_config}

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#platform_version ContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#annotations ContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: ContainerAttachedClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#authorization ContainerAttachedCluster#authorization}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: ContainerAttachedClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#binary_authorization ContainerAttachedCluster#binary_authorization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#deletion_policy ContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#description ContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: ContainerAttachedClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#logging_config ContainerAttachedCluster#logging_config}

---

##### `monitoringConfig`<sup>Optional</sup> <a name="monitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig"></a>

```typescript
public readonly monitoringConfig: ContainerAttachedClusterMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#monitoring_config ContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}.

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAttachedClusterProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#proxy_config ContainerAttachedCluster#proxy_config}

---

##### `securityPostureConfig`<sup>Optional</sup> <a name="securityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: ContainerAttachedClusterSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#security_posture_config ContainerAttachedCluster#security_posture_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAttachedClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#timeouts ContainerAttachedCluster#timeouts}

---

### ContainerAttachedClusterErrors <a name="ContainerAttachedClusterErrors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterErrors: containerAttachedCluster.ContainerAttachedClusterErrors = { ... }
```


### ContainerAttachedClusterFleet <a name="ContainerAttachedClusterFleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterFleet: containerAttachedCluster.ContainerAttachedClusterFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project">project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}

---

### ContainerAttachedClusterLoggingConfig <a name="ContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterLoggingConfig: containerAttachedCluster.ContainerAttachedClusterLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `componentConfig`<sup>Optional</sup> <a name="componentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```typescript
public readonly componentConfig: ContainerAttachedClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#component_config ContainerAttachedCluster#component_config}

---

### ContainerAttachedClusterLoggingConfigComponentConfig <a name="ContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterLoggingConfigComponentConfig: containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">enableComponents</a></code> | <code>string[]</code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `enableComponents`<sup>Optional</sup> <a name="enableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```typescript
public readonly enableComponents: string[];
```

- *Type:* string[]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#enable_components ContainerAttachedCluster#enable_components}

---

### ContainerAttachedClusterMonitoringConfig <a name="ContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterMonitoringConfig: containerAttachedCluster.ContainerAttachedClusterMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">managedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `managedPrometheusConfig`<sup>Optional</sup> <a name="managedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```typescript
public readonly managedPrometheusConfig: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#managed_prometheus_config ContainerAttachedCluster#managed_prometheus_config}

---

### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterMonitoringConfigManagedPrometheusConfig: containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Managed Collection. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#enabled ContainerAttachedCluster#enabled}

---

### ContainerAttachedClusterOidcConfig <a name="ContainerAttachedClusterOidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterOidcConfig: containerAttachedCluster.ContainerAttachedClusterOidcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks">jwks</a></code> | <code>string</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#issuer_url ContainerAttachedCluster#issuer_url}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks"></a>

```typescript
public readonly jwks: string;
```

- *Type:* string

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#jwks ContainerAttachedCluster#jwks}

---

### ContainerAttachedClusterProxyConfig <a name="ContainerAttachedClusterProxyConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterProxyConfig: containerAttachedCluster.ContainerAttachedClusterProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.property.kubernetesSecret">kubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | kubernetes_secret block. |

---

##### `kubernetesSecret`<sup>Optional</sup> <a name="kubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig.property.kubernetesSecret"></a>

```typescript
public readonly kubernetesSecret: ContainerAttachedClusterProxyConfigKubernetesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#kubernetes_secret ContainerAttachedCluster#kubernetes_secret}

---

### ContainerAttachedClusterProxyConfigKubernetesSecret <a name="ContainerAttachedClusterProxyConfigKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterProxyConfigKubernetesSecret: containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.name">name</a></code> | <code>string</code> | Name of the kubernetes secret containing the proxy config. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the kubernetes secret containing the proxy config. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#namespace ContainerAttachedCluster#namespace}

---

### ContainerAttachedClusterSecurityPostureConfig <a name="ContainerAttachedClusterSecurityPostureConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterSecurityPostureConfig: containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]. |

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#vulnerability_mode ContainerAttachedCluster#vulnerability_mode}

---

### ContainerAttachedClusterTimeouts <a name="ContainerAttachedClusterTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterTimeouts: containerAttachedCluster.ContainerAttachedClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}.

---

### ContainerAttachedClusterWorkloadIdentityConfig <a name="ContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

const containerAttachedClusterWorkloadIdentityConfig: containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAttachedClusterAuthorizationOutputReference <a name="ContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups"></a>

```typescript
public resetAdminGroups(): void
```

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```typescript
public resetAdminUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```typescript
public readonly adminGroupsInput: string[];
```

- *Type:* string[]

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: string[];
```

- *Type:* string[]

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminGroups"></a>

```typescript
public readonly adminGroups: string[];
```

- *Type:* string[]

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---


### ContainerAttachedClusterBinaryAuthorizationOutputReference <a name="ContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```typescript
public resetEvaluationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---


### ContainerAttachedClusterErrorsList <a name="ContainerAttachedClusterErrorsList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get"></a>

```typescript
public get(index: number): ContainerAttachedClusterErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerAttachedClusterErrorsOutputReference <a name="ContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterErrors;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a>

---


### ContainerAttachedClusterFleetOutputReference <a name="ContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---


### ContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">resetEnableComponents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableComponents` <a name="resetEnableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```typescript
public resetEnableComponents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enableComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enableComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableComponentsInput`<sup>Optional</sup> <a name="enableComponentsInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```typescript
public readonly enableComponentsInput: string[];
```

- *Type:* string[]

---

##### `enableComponents`<sup>Required</sup> <a name="enableComponents" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```typescript
public readonly enableComponents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### ContainerAttachedClusterLoggingConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">putComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">resetComponentConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponentConfig` <a name="putComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```typescript
public putComponentConfig(value: ContainerAttachedClusterLoggingConfigComponentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `resetComponentConfig` <a name="resetComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```typescript
public resetComponentConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">componentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentConfig`<sup>Required</sup> <a name="componentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```typescript
public readonly componentConfig: ContainerAttachedClusterLoggingConfigComponentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `componentConfigInput`<sup>Optional</sup> <a name="componentConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```typescript
public readonly componentConfigInput: ContainerAttachedClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---


### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### ContainerAttachedClusterMonitoringConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">putManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">resetManagedPrometheusConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedPrometheusConfig` <a name="putManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```typescript
public putManagedPrometheusConfig(value: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `resetManagedPrometheusConfig` <a name="resetManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```typescript
public resetManagedPrometheusConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">managedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">managedPrometheusConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedPrometheusConfig`<sup>Required</sup> <a name="managedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```typescript
public readonly managedPrometheusConfig: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `managedPrometheusConfigInput`<sup>Optional</sup> <a name="managedPrometheusConfigInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```typescript
public readonly managedPrometheusConfigInput: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterMonitoringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---


### ContainerAttachedClusterOidcConfigOutputReference <a name="ContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks">resetJwks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```typescript
public resetJwks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">jwksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks">jwks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```typescript
public readonly jwksInput: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```typescript
public readonly jwks: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterOidcConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---


### ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference <a name="ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterProxyConfigKubernetesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---


### ContainerAttachedClusterProxyConfigOutputReference <a name="ContainerAttachedClusterProxyConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret">putKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret">resetKubernetesSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetesSecret` <a name="putKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret"></a>

```typescript
public putKubernetesSecret(value: ContainerAttachedClusterProxyConfigKubernetesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `resetKubernetesSecret` <a name="resetKubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret"></a>

```typescript
public resetKubernetesSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret">kubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput">kubernetesSecretInput</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kubernetesSecret`<sup>Required</sup> <a name="kubernetesSecret" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret"></a>

```typescript
public readonly kubernetesSecret: ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a>

---

##### `kubernetesSecretInput`<sup>Optional</sup> <a name="kubernetesSecretInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput"></a>

```typescript
public readonly kubernetesSecretInput: ContainerAttachedClusterProxyConfigKubernetesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigKubernetesSecret">ContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterProxyConfig">ContainerAttachedClusterProxyConfig</a>

---


### ContainerAttachedClusterSecurityPostureConfigOutputReference <a name="ContainerAttachedClusterSecurityPostureConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vulnerabilityModeInput`<sup>Optional</sup> <a name="vulnerabilityModeInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```typescript
public readonly vulnerabilityModeInput: string;
```

- *Type:* string

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterSecurityPostureConfig">ContainerAttachedClusterSecurityPostureConfig</a>

---


### ContainerAttachedClusterTimeoutsOutputReference <a name="ContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAttachedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

---


### ContainerAttachedClusterWorkloadIdentityConfigList <a name="ContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```typescript
public get(index: number): ContainerAttachedClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="ContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```typescript
import { containerAttachedCluster } from '@cdktf/provider-google'

new containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```typescript
public readonly workloadPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAttachedClusterWorkloadIdentityConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a>

---



