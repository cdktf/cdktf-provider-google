# `networkConnectivitySpoke` Submodule <a name="`networkConnectivitySpoke` Submodule" id="@cdktf/provider-google.networkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivitySpoke <a name="NetworkConnectivitySpoke" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpoke(scope: Construct, id: string, config: NetworkConnectivitySpokeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig">NetworkConnectivitySpokeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig">NetworkConnectivitySpokeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments">putLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances">putLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork">putLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels">putLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments">resetLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">resetLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork">resetLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels">resetLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinkedInterconnectAttachments` <a name="putLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```typescript
public putLinkedInterconnectAttachments(value: NetworkConnectivitySpokeLinkedInterconnectAttachments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `putLinkedRouterApplianceInstances` <a name="putLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```typescript
public putLinkedRouterApplianceInstances(value: NetworkConnectivitySpokeLinkedRouterApplianceInstances): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `putLinkedVpcNetwork` <a name="putLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork"></a>

```typescript
public putLinkedVpcNetwork(value: NetworkConnectivitySpokeLinkedVpcNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `putLinkedVpnTunnels` <a name="putLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```typescript
public putLinkedVpnTunnels(value: NetworkConnectivitySpokeLinkedVpnTunnels): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivitySpokeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLinkedInterconnectAttachments` <a name="resetLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```typescript
public resetLinkedInterconnectAttachments(): void
```

##### `resetLinkedRouterApplianceInstances` <a name="resetLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```typescript
public resetLinkedRouterApplianceInstances(): void
```

##### `resetLinkedVpcNetwork` <a name="resetLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork"></a>

```typescript
public resetLinkedVpcNetwork(): void
```

##### `resetLinkedVpnTunnels` <a name="resetLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```typescript
public resetLinkedVpnTunnels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivitySpoke resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectivitySpoke resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivitySpoke to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivitySpoke that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivitySpoke to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork">linkedVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput">hubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">linkedInterconnectAttachmentsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">linkedRouterApplianceInstancesInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput">linkedVpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput">linkedVpnTunnelsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub">hub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `linkedInterconnectAttachments`<sup>Required</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```typescript
public readonly linkedInterconnectAttachments: NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `linkedRouterApplianceInstances`<sup>Required</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```typescript
public readonly linkedRouterApplianceInstances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `linkedVpcNetwork`<sup>Required</sup> <a name="linkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork"></a>

```typescript
public readonly linkedVpcNetwork: NetworkConnectivitySpokeLinkedVpcNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a>

---

##### `linkedVpnTunnels`<sup>Required</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```typescript
public readonly linkedVpnTunnels: NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivitySpokeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput"></a>

```typescript
public readonly hubInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkedInterconnectAttachmentsInput`<sup>Optional</sup> <a name="linkedInterconnectAttachmentsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```typescript
public readonly linkedInterconnectAttachmentsInput: NetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `linkedRouterApplianceInstancesInput`<sup>Optional</sup> <a name="linkedRouterApplianceInstancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```typescript
public readonly linkedRouterApplianceInstancesInput: NetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `linkedVpcNetworkInput`<sup>Optional</sup> <a name="linkedVpcNetworkInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput"></a>

```typescript
public readonly linkedVpcNetworkInput: NetworkConnectivitySpokeLinkedVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `linkedVpnTunnelsInput`<sup>Optional</sup> <a name="linkedVpnTunnelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```typescript
public readonly linkedVpnTunnelsInput: NetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivitySpokeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivitySpokeConfig <a name="NetworkConnectivitySpokeConfig" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeConfig: networkConnectivitySpoke.NetworkConnectivitySpokeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub">hub</a></code> | <code>string</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name">name</a></code> | <code>string</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description">description</a></code> | <code>string</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork">linkedVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `linkedInterconnectAttachments`<sup>Optional</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```typescript
public readonly linkedInterconnectAttachments: NetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linkedRouterApplianceInstances`<sup>Optional</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```typescript
public readonly linkedRouterApplianceInstances: NetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linkedVpcNetwork`<sup>Optional</sup> <a name="linkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork"></a>

```typescript
public readonly linkedVpcNetwork: NetworkConnectivitySpokeLinkedVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}

---

##### `linkedVpnTunnels`<sup>Optional</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```typescript
public readonly linkedVpnTunnels: NetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivitySpokeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

### NetworkConnectivitySpokeLinkedInterconnectAttachments <a name="NetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeLinkedInterconnectAttachments: networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">uris</a></code> | <code>string[]</code> | The URIs of linked interconnect attachment resources. |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeLinkedRouterApplianceInstances: networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">instances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```typescript
public readonly instances: IResolvable | NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeLinkedRouterApplianceInstancesInstances: networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">virtualMachine</a></code> | <code>string</code> | The URI of the virtual machine resource. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: string;
```

- *Type:* string

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}

---

### NetworkConnectivitySpokeLinkedVpcNetwork <a name="NetworkConnectivitySpokeLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeLinkedVpcNetwork: networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri">uri</a></code> | <code>string</code> | The URI of the VPC network resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges">excludeExportRanges</a></code> | <code>string[]</code> | IP ranges encompassing the subnets to be excluded from peering. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#uri NetworkConnectivitySpoke#uri}

---

##### `excludeExportRanges`<sup>Optional</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges"></a>

```typescript
public readonly excludeExportRanges: string[];
```

- *Type:* string[]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}

---

### NetworkConnectivitySpokeLinkedVpnTunnels <a name="NetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeLinkedVpnTunnels: networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris">uris</a></code> | <code>string[]</code> | The URIs of linked VPN tunnel resources. |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeTimeouts <a name="NetworkConnectivitySpokeTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

const networkConnectivitySpokeTimeouts: networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```typescript
public get(index: number): NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine"></a>

```typescript
public resetVirtualMachine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">virtualMachineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">virtualMachine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```typescript
public readonly virtualMachineInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">putInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```typescript
public putInstances(value: IResolvable | NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">instancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```typescript
public readonly instances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: IResolvable | NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### NetworkConnectivitySpokeLinkedVpcNetworkOutputReference <a name="NetworkConnectivitySpokeLinkedVpcNetworkOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges">resetExcludeExportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeExportRanges` <a name="resetExcludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```typescript
public resetExcludeExportRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput">excludeExportRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges">excludeExportRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeExportRangesInput`<sup>Optional</sup> <a name="excludeExportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```typescript
public readonly excludeExportRangesInput: string[];
```

- *Type:* string[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `excludeExportRanges`<sup>Required</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges"></a>

```typescript
public readonly excludeExportRanges: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivitySpokeLinkedVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---


### NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### NetworkConnectivitySpokeTimeoutsOutputReference <a name="NetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivitySpoke } from '@cdktf/provider-google'

new networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivitySpokeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---



