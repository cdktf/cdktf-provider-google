# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktf/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

new computeVpnTunnel.ComputeVpnTunnel(scope: Construct, id: string, config: ComputeVpnTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeVpnTunnelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```typescript
public resetIkeVersion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```typescript
public resetLocalTrafficSelector(): void
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```typescript
public resetPeerExternalGateway(): void
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```typescript
public resetPeerExternalGatewayInterface(): void
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```typescript
public resetPeerGcpGateway(): void
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```typescript
public resetPeerIp(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```typescript
public resetRemoteTrafficSelector(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```typescript
public resetTargetVpnGateway(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```typescript
public resetVpnGateway(): void
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```typescript
public resetVpnGatewayInterface(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeVpnTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

computeVpnTunnel.ComputeVpnTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

computeVpnTunnel.ComputeVpnTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

computeVpnTunnel.ComputeVpnTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeVpnTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```typescript
public readonly detailedStatus: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```typescript
public readonly sharedSecretHash: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeVpnTunnelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```typescript
public readonly ikeVersionInput: number;
```

- *Type:* number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```typescript
public readonly localTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```typescript
public readonly peerExternalGatewayInput: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```typescript
public readonly peerExternalGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```typescript
public readonly peerGcpGatewayInput: string;
```

- *Type:* string

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```typescript
public readonly peerIpInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```typescript
public readonly remoteTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```typescript
public readonly targetVpnGatewayInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeVpnTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```typescript
public readonly vpnGatewayInput: string;
```

- *Type:* string

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```typescript
public readonly vpnGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

const computeVpnTunnelConfig: computeVpnTunnel.ComputeVpnTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">region</a></code> | <code>string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">router</a></code> | <code>string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeVpnTunnelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

const computeVpnTunnelTimeouts: computeVpnTunnel.ComputeVpnTunnelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeVpnTunnel } from '@cdktf/provider-google'

new computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeVpnTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---



