# `google_certificate_manager_dns_authorization`

Refer to the Terraform Registory for docs: [`google_certificate_manager_dns_authorization`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization).

# `certificateManagerDnsAuthorization` Submodule <a name="`certificateManagerDnsAuthorization` Submodule" id="@cdktf/provider-google.certificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerDnsAuthorization <a name="CertificateManagerDnsAuthorization" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

new certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization(scope: Construct, id: string, config: CertificateManagerDnsAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig">CertificateManagerDnsAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificateManagerDnsAuthorizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord">dnsResourceRecord</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsResourceRecord`<sup>Required</sup> <a name="dnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```typescript
public readonly dnsResourceRecord: CertificateManagerDnsAuthorizationDnsResourceRecordList;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerDnsAuthorizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerDnsAuthorizationConfig <a name="CertificateManagerDnsAuthorizationConfig" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

const certificateManagerDnsAuthorizationConfig: certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain">domain</a></code> | <code>string</code> | A domain which is being authorized. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#domain CertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#name CertificateManagerDnsAuthorization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#description CertificateManagerDnsAuthorization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the DNS Authorization resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#labels CertificateManagerDnsAuthorization#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#timeouts CertificateManagerDnsAuthorization#timeouts}

---

### CertificateManagerDnsAuthorizationDnsResourceRecord <a name="CertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

const certificateManagerDnsAuthorizationDnsResourceRecord: certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord = { ... }
```


### CertificateManagerDnsAuthorizationTimeouts <a name="CertificateManagerDnsAuthorizationTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

const certificateManagerDnsAuthorizationTimeouts: certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerDnsAuthorizationDnsResourceRecordList <a name="CertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

new certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```typescript
public get(index: number): CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

new certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificateManagerDnsAuthorizationDnsResourceRecord;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a>

---


### CertificateManagerDnsAuthorizationTimeoutsOutputReference <a name="CertificateManagerDnsAuthorizationTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificateManagerDnsAuthorization } from '@cdktf/provider-google'

new certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

---



