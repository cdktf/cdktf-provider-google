# `google_compute_subnetwork`

Refer to the Terraform Registory for docs: [`google_compute_subnetwork`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork).

# `computeSubnetwork` Submodule <a name="`computeSubnetwork` Submodule" id="@cdktf/provider-google.computeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSubnetwork <a name="ComputeSubnetwork" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

new computeSubnetwork.ComputeSubnetwork(scope: Construct, id: string, config: ComputeSubnetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange">putSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType">resetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess">resetPrivateIpGoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess">resetPrivateIpv6GoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange">resetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig"></a>

```typescript
public putLogConfig(value: ComputeSubnetworkLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `putSecondaryIpRange` <a name="putSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange"></a>

```typescript
public putSecondaryIpRange(value: IResolvable | ComputeSubnetworkSecondaryIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeSubnetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6AccessType` <a name="resetIpv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType"></a>

```typescript
public resetIpv6AccessType(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetPrivateIpGoogleAccess` <a name="resetPrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```typescript
public resetPrivateIpGoogleAccess(): void
```

##### `resetPrivateIpv6GoogleAccess` <a name="resetPrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```typescript
public resetPrivateIpv6GoogleAccess(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSecondaryIpRange` <a name="resetSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange"></a>

```typescript
public resetSecondaryIpRange(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

computeSubnetwork.ComputeSubnetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

computeSubnetwork.ComputeSubnetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

computeSubnetwork.ComputeSubnetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress">gatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix">internalIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange">ipv6CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange">secondaryIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput">ipv6AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput">privateIpGoogleAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput">privateIpv6GoogleAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput">secondaryIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType">ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `externalIpv6Prefix`<sup>Required</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix"></a>

```typescript
public readonly externalIpv6Prefix: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress"></a>

```typescript
public readonly gatewayAddress: string;
```

- *Type:* string

---

##### `internalIpv6Prefix`<sup>Required</sup> <a name="internalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix"></a>

```typescript
public readonly internalIpv6Prefix: string;
```

- *Type:* string

---

##### `ipv6CidrRange`<sup>Required</sup> <a name="ipv6CidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange"></a>

```typescript
public readonly ipv6CidrRange: string;
```

- *Type:* string

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeSubnetworkLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a>

---

##### `secondaryIpRange`<sup>Required</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: ComputeSubnetworkSecondaryIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSubnetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `ipv6AccessTypeInput`<sup>Optional</sup> <a name="ipv6AccessTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```typescript
public readonly ipv6AccessTypeInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: ComputeSubnetworkLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateIpGoogleAccessInput`<sup>Optional</sup> <a name="privateIpGoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```typescript
public readonly privateIpGoogleAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpv6GoogleAccessInput`<sup>Optional</sup> <a name="privateIpv6GoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```typescript
public readonly privateIpv6GoogleAccessInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secondaryIpRangeInput`<sup>Optional</sup> <a name="secondaryIpRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput"></a>

```typescript
public readonly secondaryIpRangeInput: IResolvable | ComputeSubnetworkSecondaryIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeSubnetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType"></a>

```typescript
public readonly ipv6AccessType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `privateIpGoogleAccess`<sup>Required</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess"></a>

```typescript
public readonly privateIpGoogleAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateIpv6GoogleAccess`<sup>Required</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```typescript
public readonly privateIpv6GoogleAccess: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSubnetworkConfig <a name="ComputeSubnetworkConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

const computeSubnetworkConfig: computeSubnetwork.ComputeSubnetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name">name</a></code> | <code>string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network">network</a></code> | <code>string</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType">ipv6AccessType</a></code> | <code>string</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>string</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose">purpose</a></code> | <code>string</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region">region</a></code> | <code>string</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role">role</a></code> | <code>string</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange">secondaryIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]</code> | An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType">stackType</a></code> | <code>string</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6AccessType`<sup>Optional</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType"></a>

```typescript
public readonly ipv6AccessType: string;
```

- *Type:* string

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeSubnetworkLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `privateIpGoogleAccess`<sup>Optional</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```typescript
public readonly privateIpGoogleAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `privateIpv6GoogleAccess`<sup>Optional</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```typescript
public readonly privateIpv6GoogleAccess: string;
```

- *Type:* string

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

The purpose of the resource.

This field can be either 'PRIVATE_RFC_1918', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE_RFC_1918'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: IResolvable | ComputeSubnetworkSecondaryIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]

An array of configurations for secondary IP ranges for VM instances contained in this subnetwork.

The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.

**Note**: This field uses [attr-as-block mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html) to avoid
breaking users during the 0.12 upgrade. To explicitly send a list
of zero objects you must use the following syntax:
'example=[]'
For more details about this behavior, see [this section](https://www.terraform.io/docs/configuration/attr-as-blocks.html#defining-a-fixed-object-collection-value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSubnetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

### ComputeSubnetworkLogConfig <a name="ComputeSubnetworkLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

const computeSubnetworkLogConfig: computeSubnetwork.ComputeSubnetworkLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata">metadata</a></code> | <code>string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | List of metadata fields that should be added to reported logs. |

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

### ComputeSubnetworkSecondaryIpRange <a name="ComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

const computeSubnetworkSecondaryIpRange: computeSubnetwork.ComputeSubnetworkSecondaryIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName">rangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#range_name ComputeSubnetwork#range_name}. |

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}.

---

##### `rangeName`<sup>Optional</sup> <a name="rangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```typescript
public readonly rangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#range_name ComputeSubnetwork#range_name}.

---

### ComputeSubnetworkTimeouts <a name="ComputeSubnetworkTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

const computeSubnetworkTimeouts: computeSubnetwork.ComputeSubnetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSubnetworkLogConfigOutputReference <a name="ComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

new computeSubnetwork.ComputeSubnetworkLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```typescript
public resetAggregationInterval(): void
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```typescript
public resetFilterExpr(): void
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```typescript
public resetFlowSampling(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```typescript
public resetMetadataFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput">filterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">flowSamplingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr">filterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling">flowSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```typescript
public readonly aggregationIntervalInput: string;
```

- *Type:* string

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```typescript
public readonly filterExprInput: string;
```

- *Type:* string

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```typescript
public readonly flowSamplingInput: number;
```

- *Type:* number

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```typescript
public readonly metadataFieldsInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSubnetworkLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---


### ComputeSubnetworkSecondaryIpRangeList <a name="ComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

new computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get"></a>

```typescript
public get(index: number): ComputeSubnetworkSecondaryIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSubnetworkSecondaryIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>[]

---


### ComputeSubnetworkSecondaryIpRangeOutputReference <a name="ComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

new computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetRangeName">resetRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```typescript
public resetIpCidrRange(): void
```

##### `resetRangeName` <a name="resetRangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetRangeName"></a>

```typescript
public resetRangeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">rangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">rangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `rangeNameInput`<sup>Optional</sup> <a name="rangeNameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```typescript
public readonly rangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `rangeName`<sup>Required</sup> <a name="rangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```typescript
public readonly rangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSubnetworkSecondaryIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>

---


### ComputeSubnetworkTimeoutsOutputReference <a name="ComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeSubnetwork } from '@cdktf/provider-google'

new computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeSubnetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---



