# `computeRouterPeer` Submodule <a name="`computeRouterPeer` Submodule" id="@cdktf/provider-google.computeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterPeer <a name="ComputeRouterPeer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

new computeRouterPeer.ComputeRouterPeer(scope: Construct, id: string, config: ComputeRouterPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig">ComputeRouterPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig">ComputeRouterPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges">putAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd">putBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedGroups">resetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedIpRanges">resetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedRoutePriority">resetAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertiseMode">resetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetBfd">resetBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRouterApplianceInstance">resetRouterApplianceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvertisedIpRanges` <a name="putAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges"></a>

```typescript
public putAdvertisedIpRanges(value: IResolvable | ComputeRouterPeerAdvertisedIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]

---

##### `putBfd` <a name="putBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd"></a>

```typescript
public putBfd(value: ComputeRouterPeerBfd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRouterPeerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a>

---

##### `resetAdvertisedGroups` <a name="resetAdvertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedGroups"></a>

```typescript
public resetAdvertisedGroups(): void
```

##### `resetAdvertisedIpRanges` <a name="resetAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedIpRanges"></a>

```typescript
public resetAdvertisedIpRanges(): void
```

##### `resetAdvertisedRoutePriority` <a name="resetAdvertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```typescript
public resetAdvertisedRoutePriority(): void
```

##### `resetAdvertiseMode` <a name="resetAdvertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertiseMode"></a>

```typescript
public resetAdvertiseMode(): void
```

##### `resetBfd` <a name="resetBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetBfd"></a>

```typescript
public resetBfd(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRouterApplianceInstance` <a name="resetRouterApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRouterApplianceInstance"></a>

```typescript
public resetRouterApplianceInstance(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

computeRouterPeer.ComputeRouterPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

computeRouterPeer.ComputeRouterPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

computeRouterPeer.ComputeRouterPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList">ComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference">ComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.managementType">managementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference">ComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroupsInput">advertisedGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRangesInput">advertisedIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriorityInput">advertisedRoutePriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseModeInput">advertiseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfdInput">bfdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddressInput">peerIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstanceInput">routerApplianceInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroups">advertisedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advertisedIpRanges`<sup>Required</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRanges"></a>

```typescript
public readonly advertisedIpRanges: ComputeRouterPeerAdvertisedIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList">ComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `bfd`<sup>Required</sup> <a name="bfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfd"></a>

```typescript
public readonly bfd: ComputeRouterPeerBfdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference">ComputeRouterPeerBfdOutputReference</a>

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.managementType"></a>

```typescript
public readonly managementType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterPeerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference">ComputeRouterPeerTimeoutsOutputReference</a>

---

##### `advertisedGroupsInput`<sup>Optional</sup> <a name="advertisedGroupsInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroupsInput"></a>

```typescript
public readonly advertisedGroupsInput: string[];
```

- *Type:* string[]

---

##### `advertisedIpRangesInput`<sup>Optional</sup> <a name="advertisedIpRangesInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRangesInput"></a>

```typescript
public readonly advertisedIpRangesInput: IResolvable | ComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]

---

##### `advertisedRoutePriorityInput`<sup>Optional</sup> <a name="advertisedRoutePriorityInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```typescript
public readonly advertisedRoutePriorityInput: number;
```

- *Type:* number

---

##### `advertiseModeInput`<sup>Optional</sup> <a name="advertiseModeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseModeInput"></a>

```typescript
public readonly advertiseModeInput: string;
```

- *Type:* string

---

##### `bfdInput`<sup>Optional</sup> <a name="bfdInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfdInput"></a>

```typescript
public readonly bfdInput: ComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerIpAddressInput`<sup>Optional</sup> <a name="peerIpAddressInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddressInput"></a>

```typescript
public readonly peerIpAddressInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerApplianceInstanceInput`<sup>Optional</sup> <a name="routerApplianceInstanceInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```typescript
public readonly routerApplianceInstanceInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeRouterPeerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a> | cdktf.IResolvable

---

##### `advertisedGroups`<sup>Required</sup> <a name="advertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroups"></a>

```typescript
public readonly advertisedGroups: string[];
```

- *Type:* string[]

---

##### `advertisedRoutePriority`<sup>Required</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriority"></a>

```typescript
public readonly advertisedRoutePriority: number;
```

- *Type:* number

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `routerApplianceInstance`<sup>Required</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstance"></a>

```typescript
public readonly routerApplianceInstance: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterPeerAdvertisedIpRanges <a name="ComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

const computeRouterPeerAdvertisedIpRanges: computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.range">range</a></code> | <code>string</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.description">description</a></code> | <code>string</code> | User-specified description for the IP range. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#range ComputeRouterPeer#range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#description ComputeRouterPeer#description}

---

### ComputeRouterPeerBfd <a name="ComputeRouterPeerBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

const computeRouterPeerBfd: computeRouterPeer.ComputeRouterPeerBfd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>string</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minReceiveInterval">minReceiveInterval</a></code> | <code>number</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minTransmitInterval">minTransmitInterval</a></code> | <code>number</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.multiplier">multiplier</a></code> | <code>number</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```typescript
public readonly sessionInitializationMode: string;
```

- *Type:* string

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#session_initialization_mode ComputeRouterPeer#session_initialization_mode}

---

##### `minReceiveInterval`<sup>Optional</sup> <a name="minReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minReceiveInterval"></a>

```typescript
public readonly minReceiveInterval: number;
```

- *Type:* number

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#min_receive_interval ComputeRouterPeer#min_receive_interval}

---

##### `minTransmitInterval`<sup>Optional</sup> <a name="minTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minTransmitInterval"></a>

```typescript
public readonly minTransmitInterval: number;
```

- *Type:* number

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#min_transmit_interval ComputeRouterPeer#min_transmit_interval}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#multiplier ComputeRouterPeer#multiplier}

---

### ComputeRouterPeerConfig <a name="ComputeRouterPeerConfig" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

const computeRouterPeerConfig: computeRouterPeer.ComputeRouterPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.interface">interface</a></code> | <code>string</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.name">name</a></code> | <code>string</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerAsn">peerAsn</a></code> | <code>number</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedGroups">advertisedGroups</a></code> | <code>string[]</code> | User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>number</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#id ComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#project ComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.region">region</a></code> | <code>string</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>string</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#interface ComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#name ComputeRouterPeer#name}

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#peer_asn ComputeRouterPeer#peer_asn}

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#peer_ip_address ComputeRouterPeer#peer_ip_address}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#router ComputeRouterPeer#router}

---

##### `advertisedGroups`<sup>Optional</sup> <a name="advertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedGroups"></a>

```typescript
public readonly advertisedGroups: string[];
```

- *Type:* string[]

User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:.

'ALL_SUBNETS': Advertises all available subnets, including peer VPC subnets.
'ALL_VPC_SUBNETS': Advertises the router's own VPC subnets.
'ALL_PEER_VPC_SUBNETS': Advertises peer subnets of the router's VPC network.


Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_groups ComputeRouterPeer#advertised_groups}

---

##### `advertisedIpRanges`<sup>Optional</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```typescript
public readonly advertisedIpRanges: IResolvable | ComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_ip_ranges ComputeRouterPeer#advertised_ip_ranges}

---

##### `advertisedRoutePriority`<sup>Optional</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```typescript
public readonly advertisedRoutePriority: number;
```

- *Type:* number

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_route_priority ComputeRouterPeer#advertised_route_priority}

---

##### `advertiseMode`<sup>Optional</sup> <a name="advertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertise_mode ComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.bfd"></a>

```typescript
public readonly bfd: ComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#bfd ComputeRouterPeer#bfd}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#enable ComputeRouterPeer#enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#id ComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#ip_address ComputeRouterPeer#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#project ComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#region ComputeRouterPeer#region}

---

##### `routerApplianceInstance`<sup>Optional</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```typescript
public readonly routerApplianceInstance: string;
```

- *Type:* string

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#router_appliance_instance ComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterPeerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#timeouts ComputeRouterPeer#timeouts}

---

### ComputeRouterPeerTimeouts <a name="ComputeRouterPeerTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

const computeRouterPeerTimeouts: computeRouterPeer.ComputeRouterPeerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#create ComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#delete ComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#update ComputeRouterPeer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#create ComputeRouterPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#delete ComputeRouterPeer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#update ComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterPeerAdvertisedIpRangesList <a name="ComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

new computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get"></a>

```typescript
public get(index: number): ComputeRouterPeerAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a>[]

---


### ComputeRouterPeerAdvertisedIpRangesOutputReference <a name="ComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

new computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRouterPeerAdvertisedIpRanges | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges">ComputeRouterPeerAdvertisedIpRanges</a> | cdktf.IResolvable

---


### ComputeRouterPeerBfdOutputReference <a name="ComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

new computeRouterPeer.ComputeRouterPeerBfdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">resetMinReceiveInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">resetMinTransmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinReceiveInterval` <a name="resetMinReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```typescript
public resetMinReceiveInterval(): void
```

##### `resetMinTransmitInterval` <a name="resetMinTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```typescript
public resetMinTransmitInterval(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">minReceiveIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">minTransmitIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">sessionInitializationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveInterval">minReceiveInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitInterval">minTransmitInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minReceiveIntervalInput`<sup>Optional</sup> <a name="minReceiveIntervalInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```typescript
public readonly minReceiveIntervalInput: number;
```

- *Type:* number

---

##### `minTransmitIntervalInput`<sup>Optional</sup> <a name="minTransmitIntervalInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```typescript
public readonly minTransmitIntervalInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `sessionInitializationModeInput`<sup>Optional</sup> <a name="sessionInitializationModeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```typescript
public readonly sessionInitializationModeInput: string;
```

- *Type:* string

---

##### `minReceiveInterval`<sup>Required</sup> <a name="minReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```typescript
public readonly minReceiveInterval: number;
```

- *Type:* number

---

##### `minTransmitInterval`<sup>Required</sup> <a name="minTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```typescript
public readonly minTransmitInterval: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```typescript
public readonly sessionInitializationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---


### ComputeRouterPeerTimeoutsOutputReference <a name="ComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRouterPeer } from '@cdktf/provider-google'

new computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRouterPeerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a> | cdktf.IResolvable

---



