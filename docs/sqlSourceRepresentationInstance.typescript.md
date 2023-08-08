# `google_sql_source_representation_instance`

Refer to the Terraform Registory for docs: [`google_sql_source_representation_instance`](https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance).

# `sqlSourceRepresentationInstance` Submodule <a name="`sqlSourceRepresentationInstance` Submodule" id="@cdktf/provider-google.sqlSourceRepresentationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlSourceRepresentationInstance <a name="SqlSourceRepresentationInstance" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance google_sql_source_representation_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

new sqlSourceRepresentationInstance.SqlSourceRepresentationInstance(scope: Construct, id: string, config: SqlSourceRepresentationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig">SqlSourceRepresentationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig">SqlSourceRepresentationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath">resetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlSourceRepresentationInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetDumpFilePath` <a name="resetDumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath"></a>

```typescript
public resetDumpFilePath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput">dumpFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts"></a>

```typescript
public readonly timeouts: SqlSourceRepresentationInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a>

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `dumpFilePathInput`<sup>Optional</sup> <a name="dumpFilePathInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput"></a>

```typescript
public readonly dumpFilePathInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlSourceRepresentationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlSourceRepresentationInstanceConfig <a name="SqlSourceRepresentationInstanceConfig" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.Initializer"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

const sqlSourceRepresentationInstanceConfig: sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | The MySQL version running on your source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host">host</a></code> | <code>string</code> | The externally accessible IPv4 address for the source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey">clientKey</a></code> | <code>string</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password">password</a></code> | <code>string</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port">port</a></code> | <code>number</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username">username</a></code> | <code>string</code> | The replication user account on the external server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

The MySQL version running on your source database server.

Possible values: ["MYSQL_5_6", "MYSQL_5_7", "MYSQL_8_0", "POSTGRES_9_6", "POSTGRES_10", "POSTGRES_11", "POSTGRES_12", "POSTGRES_13", "POSTGRES_14"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#database_version SqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The externally accessible IPv4 address for the source database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#host SqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#name SqlSourceRepresentationInstance#name}

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#ca_certificate SqlSourceRepresentationInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#client_certificate SqlSourceRepresentationInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#client_key SqlSourceRepresentationInstance#client_key}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#dump_file_path SqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#password SqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#port SqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#region SqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlSourceRepresentationInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#timeouts SqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#username SqlSourceRepresentationInstance#username}

---

### SqlSourceRepresentationInstanceTimeouts <a name="SqlSourceRepresentationInstanceTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.Initializer"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

const sqlSourceRepresentationInstanceTimeouts: sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlSourceRepresentationInstanceTimeoutsOutputReference <a name="SqlSourceRepresentationInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlSourceRepresentationInstance } from '@cdktf/provider-google'

new sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlSourceRepresentationInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---



