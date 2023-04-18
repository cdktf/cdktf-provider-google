# `google_compute_ssl_certificate`

Refer to the Terraform Registory for docs: [`google_compute_ssl_certificate`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate).

# `computeSslCertificate` Submodule <a name="`computeSslCertificate` Submodule" id="@cdktf/provider-google.computeSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSslCertificate <a name="ComputeSslCertificate" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate google_compute_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

new computeSslCertificate.ComputeSslCertificate(scope: Construct, id: string, config: ComputeSslCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig">ComputeSslCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig">ComputeSslCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeSslCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isConstruct"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

computeSslCertificate.ComputeSslCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformElement"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

computeSslCertificate.ComputeSslCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformResource"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

computeSslCertificate.ComputeSslCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificateId">certificateId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference">ComputeSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: number;
```

- *Type:* number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSslCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference">ComputeSslCertificateTimeoutsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeSslCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a> | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSslCertificateConfig <a name="ComputeSslCertificateConfig" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.Initializer"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

const computeSslCertificateConfig: computeSslCertificate.ComputeSslCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | The certificate in PEM format. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#id ComputeSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#project ComputeSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#certificate ComputeSslCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#private_key ComputeSslCertificate#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#description ComputeSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#id ComputeSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.name"></a>

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


These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#name ComputeSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#name_prefix ComputeSslCertificate#name_prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#project ComputeSslCertificate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeSslCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#timeouts ComputeSslCertificate#timeouts}

---

### ComputeSslCertificateTimeouts <a name="ComputeSslCertificateTimeouts" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts.Initializer"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

const computeSslCertificateTimeouts: computeSslCertificate.ComputeSslCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#create ComputeSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#delete ComputeSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#create ComputeSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_ssl_certificate#delete ComputeSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSslCertificateTimeoutsOutputReference <a name="ComputeSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeSslCertificate } from '@cdktf/provider-google'

new computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeSslCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeSslCertificate.ComputeSslCertificateTimeouts">ComputeSslCertificateTimeouts</a> | cdktf.IResolvable

---



