# `google_compute_target_ssl_proxy`

Refer to the Terraform Registory for docs: [`google_compute_target_ssl_proxy`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy).

# `computeTargetSslProxy` Submodule <a name="`computeTargetSslProxy` Submodule" id="@cdktf/provider-google.computeTargetSslProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetSslProxy <a name="ComputeTargetSslProxy" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy google_compute_target_ssl_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

new computeTargetSslProxy.ComputeTargetSslProxy(scope: Construct, id: string, config: ComputeTargetSslProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig">ComputeTargetSslProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig">ComputeTargetSslProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetCertificateMap">resetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeTargetSslProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---

##### `resetCertificateMap` <a name="resetCertificateMap" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetCertificateMap"></a>

```typescript
public resetCertificateMap(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslCertificates"></a>

```typescript
public resetSslCertificates(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

computeTargetSslProxy.ComputeTargetSslProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference">ComputeTargetSslProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMapInput">certificateMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMap">certificateMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeTargetSslProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference">ComputeTargetSslProxyTimeoutsOutputReference</a>

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `certificateMapInput`<sup>Optional</sup> <a name="certificateMapInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMapInput"></a>

```typescript
public readonly certificateMapInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificatesInput"></a>

```typescript
public readonly sslCertificatesInput: string[];
```

- *Type:* string[]

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeTargetSslProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `certificateMap`<sup>Required</sup> <a name="certificateMap" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetSslProxyConfig <a name="ComputeTargetSslProxyConfig" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.Initializer"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

const computeTargetSslProxyConfig: computeTargetSslProxy.ComputeTargetSslProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.backendService">backendService</a></code> | <code>string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.certificateMap">certificateMap</a></code> | <code>string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#id ComputeTargetSslProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#project ComputeTargetSslProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#backend_service ComputeTargetSslProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#name ComputeTargetSslProxy#name}

---

##### `certificateMap`<sup>Optional</sup> <a name="certificateMap" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#certificate_map ComputeTargetSslProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#description ComputeTargetSslProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#id ComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#project ComputeTargetSslProxy#project}.

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#proxy_header ComputeTargetSslProxy#proxy_header}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#ssl_certificates ComputeTargetSslProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#ssl_policy ComputeTargetSslProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeTargetSslProxyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#timeouts ComputeTargetSslProxy#timeouts}

---

### ComputeTargetSslProxyTimeouts <a name="ComputeTargetSslProxyTimeouts" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.Initializer"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

const computeTargetSslProxyTimeouts: computeTargetSslProxy.ComputeTargetSslProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#create ComputeTargetSslProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#delete ComputeTargetSslProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#update ComputeTargetSslProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#create ComputeTargetSslProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#delete ComputeTargetSslProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_target_ssl_proxy#update ComputeTargetSslProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetSslProxyTimeoutsOutputReference <a name="ComputeTargetSslProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeTargetSslProxy } from '@cdktf/provider-google'

new computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeTargetSslProxyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---



