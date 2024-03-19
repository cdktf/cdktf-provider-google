# `networkConnectivityPolicyBasedRoute` Submodule <a name="`networkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityPolicyBasedRoute <a name="NetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute(scope: Construct, id: string, config: NetworkConnectivityPolicyBasedRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig">NetworkConnectivityPolicyBasedRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig">NetworkConnectivityPolicyBasedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">putInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">resetNextHopIlbIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">resetNextHopOtherRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter"></a>

```typescript
public putFilter(value: NetworkConnectivityPolicyBasedRouteFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `putInterconnectAttachment` <a name="putInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```typescript
public putInterconnectAttachment(value: NetworkConnectivityPolicyBasedRouteInterconnectAttachment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityPolicyBasedRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```typescript
public putVirtualMachine(value: NetworkConnectivityPolicyBasedRouteVirtualMachine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```typescript
public resetInterconnectAttachment(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNextHopIlbIp` <a name="resetNextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```typescript
public resetNextHopIlbIp(): void
```

##### `resetNextHopOtherRoutes` <a name="resetNextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```typescript
public resetNextHopOtherRoutes(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```typescript
public resetVirtualMachine(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityPolicyBasedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">nextHopIlbIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">nextHopOtherRoutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter"></a>

```typescript
public readonly filter: NetworkConnectivityPolicyBasedRouteFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```typescript
public readonly warnings: NetworkConnectivityPolicyBasedRouteWarningsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```typescript
public readonly filterInput: NetworkConnectivityPolicyBasedRouteFilter;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```typescript
public readonly interconnectAttachmentInput: NetworkConnectivityPolicyBasedRouteInterconnectAttachment;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nextHopIlbIpInput`<sup>Optional</sup> <a name="nextHopIlbIpInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```typescript
public readonly nextHopIlbIpInput: string;
```

- *Type:* string

---

##### `nextHopOtherRoutesInput`<sup>Optional</sup> <a name="nextHopOtherRoutesInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```typescript
public readonly nextHopOtherRoutesInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityPolicyBasedRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```typescript
public readonly virtualMachineInput: NetworkConnectivityPolicyBasedRouteVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nextHopIlbIp`<sup>Required</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```typescript
public readonly nextHopIlbIp: string;
```

- *Type:* string

---

##### `nextHopOtherRoutes`<sup>Required</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```typescript
public readonly nextHopOtherRoutes: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityPolicyBasedRouteConfig <a name="NetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteConfig: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name">name</a></code> | <code>string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network">network</a></code> | <code>string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>string</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>string</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority">priority</a></code> | <code>number</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```typescript
public readonly filter: NetworkConnectivityPolicyBasedRouteFilter;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#filter NetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#name NetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#network NetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#description NetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: NetworkConnectivityPolicyBasedRouteInterconnectAttachment;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#interconnect_attachment NetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#labels NetworkConnectivityPolicyBasedRoute#labels}

---

##### `nextHopIlbIp`<sup>Optional</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```typescript
public readonly nextHopIlbIp: string;
```

- *Type:* string

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#next_hop_ilb_ip NetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `nextHopOtherRoutes`<sup>Optional</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```typescript
public readonly nextHopOtherRoutes: string;
```

- *Type:* string

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#next_hop_other_routes NetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#priority NetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityPolicyBasedRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#timeouts NetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: NetworkConnectivityPolicyBasedRouteVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#virtual_machine NetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### NetworkConnectivityPolicyBasedRouteFilter <a name="NetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteFilter: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange">destRange</a></code> | <code>string</code> | The destination IP range of outgoing packets that this policy-based route applies to. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange">srcRange</a></code> | <code>string</code> | The source IP range of outgoing packets that this policy-based route applies to. |

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#protocol_version NetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `destRange`<sup>Optional</sup> <a name="destRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```typescript
public readonly destRange: string;
```

- *Type:* string

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#dest_range NetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#ip_protocol NetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `srcRange`<sup>Optional</sup> <a name="srcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```typescript
public readonly srcRange: string;
```

- *Type:* string

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#src_range NetworkConnectivityPolicyBasedRoute#src_range}

---

### NetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteInterconnectAttachment: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">region</a></code> | <code>string</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#region NetworkConnectivityPolicyBasedRoute#region}

---

### NetworkConnectivityPolicyBasedRouteTimeouts <a name="NetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteTimeouts: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#update NetworkConnectivityPolicyBasedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#update NetworkConnectivityPolicyBasedRoute#update}.

---

### NetworkConnectivityPolicyBasedRouteVirtualMachine <a name="NetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteVirtualMachine: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">tags</a></code> | <code>string[]</code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/network_connectivity_policy_based_route#tags NetworkConnectivityPolicyBasedRoute#tags}

---

### NetworkConnectivityPolicyBasedRouteWarnings <a name="NetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

const networkConnectivityPolicyBasedRouteWarnings: networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="NetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">resetDestRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">resetSrcRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestRange` <a name="resetDestRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```typescript
public resetDestRange(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetSrcRange` <a name="resetSrcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```typescript
public resetSrcRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">destRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">srcRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">destRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">srcRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destRangeInput`<sup>Optional</sup> <a name="destRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```typescript
public readonly destRangeInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `srcRangeInput`<sup>Optional</sup> <a name="srcRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```typescript
public readonly srcRangeInput: string;
```

- *Type:* string

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```typescript
public readonly destRange: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `srcRange`<sup>Required</sup> <a name="srcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```typescript
public readonly srcRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityPolicyBasedRouteFilter;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---


### NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityPolicyBasedRouteInterconnectAttachment;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityPolicyBasedRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---


### NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityPolicyBasedRouteVirtualMachine;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### NetworkConnectivityPolicyBasedRouteWarningsList <a name="NetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```typescript
public get(index: number): NetworkConnectivityPolicyBasedRouteWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="NetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityPolicyBasedRoute } from '@cdktf/provider-google'

new networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">warningMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `warningMessage`<sup>Required</sup> <a name="warningMessage" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```typescript
public readonly warningMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityPolicyBasedRouteWarnings;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a>

---



