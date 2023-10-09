# `google_datastream_connection_profile`

Refer to the Terraform Registory for docs: [`google_datastream_connection_profile`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile).

# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktf/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfile(scope: Construct, id: string, config: DatastreamConnectionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">putBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">putGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">putMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">putOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">putPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">resetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">resetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">resetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">resetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">resetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBigqueryProfile` <a name="putBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```typescript
public putBigqueryProfile(value: DatastreamConnectionProfileBigqueryProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```typescript
public putForwardSshConnectivity(value: DatastreamConnectionProfileForwardSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `putGcsProfile` <a name="putGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```typescript
public putGcsProfile(value: DatastreamConnectionProfileGcsProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `putMysqlProfile` <a name="putMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```typescript
public putMysqlProfile(value: DatastreamConnectionProfileMysqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `putOracleProfile` <a name="putOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```typescript
public putOracleProfile(value: DatastreamConnectionProfileOracleProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `putPostgresqlProfile` <a name="putPostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```typescript
public putPostgresqlProfile(value: DatastreamConnectionProfilePostgresqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```typescript
public putPrivateConnectivity(value: DatastreamConnectionProfilePrivateConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: DatastreamConnectionProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `resetBigqueryProfile` <a name="resetBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```typescript
public resetBigqueryProfile(): void
```

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```typescript
public resetForwardSshConnectivity(): void
```

##### `resetGcsProfile` <a name="resetGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```typescript
public resetGcsProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMysqlProfile` <a name="resetMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```typescript
public resetMysqlProfile(): void
```

##### `resetOracleProfile` <a name="resetOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```typescript
public resetOracleProfile(): void
```

##### `resetPostgresqlProfile` <a name="resetPostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```typescript
public resetPostgresqlProfile(): void
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```typescript
public resetPrivateConnectivity(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">bigqueryProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">gcsProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">mysqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">oracleProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">postgresqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryProfile`<sup>Required</sup> <a name="bigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: DatastreamConnectionProfileBigqueryProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: DatastreamConnectionProfileForwardSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcsProfile`<sup>Required</sup> <a name="gcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: DatastreamConnectionProfileGcsProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mysqlProfile`<sup>Required</sup> <a name="mysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: DatastreamConnectionProfileMysqlProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oracleProfile`<sup>Required</sup> <a name="oracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: DatastreamConnectionProfileOracleProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresqlProfile`<sup>Required</sup> <a name="postgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: DatastreamConnectionProfilePostgresqlProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: DatastreamConnectionProfilePrivateConnectivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamConnectionProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigqueryProfileInput`<sup>Optional</sup> <a name="bigqueryProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```typescript
public readonly bigqueryProfileInput: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```typescript
public readonly connectionProfileIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```typescript
public readonly forwardSshConnectivityInput: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcsProfileInput`<sup>Optional</sup> <a name="gcsProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```typescript
public readonly gcsProfileInput: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mysqlProfileInput`<sup>Optional</sup> <a name="mysqlProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```typescript
public readonly mysqlProfileInput: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `oracleProfileInput`<sup>Optional</sup> <a name="oracleProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```typescript
public readonly oracleProfileInput: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `postgresqlProfileInput`<sup>Optional</sup> <a name="postgresqlProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```typescript
public readonly postgresqlProfileInput: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```typescript
public readonly privateConnectivityInput: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatastreamConnectionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileBigqueryProfile: datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile = { ... }
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileConfig: datastreamConnectionProfile.DatastreamConnectionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">location</a></code> | <code>string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamConnectionProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileForwardSshConnectivity: datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>string</code> | SSH password. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>number</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>string</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileGcsProfile: datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">rootPath</a></code> | <code>string</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileMysqlProfile: datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>number</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileMysqlProfileSslConfig: datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileOracleProfile: datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">databaseService</a></code> | <code>string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>number</code> | Port for the Oracle connection. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `connectionAttributes`<sup>Optional</sup> <a name="connectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfilePostgresqlProfile: datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>number</code> | Port for the PostgreSQL connection. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfilePrivateConnectivity: datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

const datastreamConnectionProfileTimeouts: datastreamConnectionProfile.DatastreamConnectionProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">resetRootPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPath` <a name="resetRootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```typescript
public resetRootPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">rootPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">rootPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `rootPathInput`<sup>Optional</sup> <a name="rootPathInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```typescript
public readonly rootPathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `rootPath`<sup>Required</sup> <a name="rootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: DatastreamConnectionProfileMysqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMysqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">resetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionAttributes` <a name="resetConnectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```typescript
public resetConnectionAttributes(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connectionAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">databaseService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionAttributesInput`<sup>Optional</sup> <a name="connectionAttributesInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```typescript
public readonly connectionAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```typescript
public readonly databaseServiceInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionAttributes`<sup>Required</sup> <a name="connectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```typescript
public readonly privateConnectionInput: string;
```

- *Type:* string

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktf/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatastreamConnectionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---



