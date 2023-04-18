# `data_google_sql_database_instance`

Refer to the Terraform Registory for docs: [`data_google_sql_database_instance`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance).

# `dataGoogleSqlDatabaseInstance` Submodule <a name="`dataGoogleSqlDatabaseInstance` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstance <a name="DataGoogleSqlDatabaseInstance" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance(scope: Construct, id: string, config: DataGoogleSqlDatabaseInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig">DataGoogleSqlDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig">DataGoogleSqlDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions">availableMaintenanceVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName">encryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress">firstIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion">maintenanceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName">masterInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword">rootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert">serverCaCert</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress">serviceAccountEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableMaintenanceVersions`<sup>Required</sup> <a name="availableMaintenanceVersions" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```typescript
public readonly availableMaintenanceVersions: string[];
```

- *Type:* string[]

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone"></a>

```typescript
public readonly clone: DataGoogleSqlDatabaseInstanceCloneList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encryptionKeyName`<sup>Required</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName"></a>

```typescript
public readonly encryptionKeyName: string;
```

- *Type:* string

---

##### `firstIpAddress`<sup>Required</sup> <a name="firstIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress"></a>

```typescript
public readonly firstIpAddress: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: DataGoogleSqlDatabaseInstanceIpAddressList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a>

---

##### `maintenanceVersion`<sup>Required</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion"></a>

```typescript
public readonly maintenanceVersion: string;
```

- *Type:* string

---

##### `masterInstanceName`<sup>Required</sup> <a name="masterInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName"></a>

```typescript
public readonly masterInstanceName: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration"></a>

```typescript
public readonly replicaConfiguration: DataGoogleSqlDatabaseInstanceReplicaConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a>

---

##### `restoreBackupContext`<sup>Required</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext"></a>

```typescript
public readonly restoreBackupContext: DataGoogleSqlDatabaseInstanceRestoreBackupContextList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a>

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword"></a>

```typescript
public readonly rootPassword: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serverCaCert`<sup>Required</sup> <a name="serverCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert"></a>

```typescript
public readonly serverCaCert: DataGoogleSqlDatabaseInstanceServerCaCertList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a>

---

##### `serviceAccountEmailAddress`<sup>Required</sup> <a name="serviceAccountEmailAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```typescript
public readonly serviceAccountEmailAddress: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings"></a>

```typescript
public readonly settings: DataGoogleSqlDatabaseInstanceSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstanceClone <a name="DataGoogleSqlDatabaseInstanceClone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceClone: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone = { ... }
```


### DataGoogleSqlDatabaseInstanceConfig <a name="DataGoogleSqlDatabaseInstanceConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceConfig: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance#id DataGoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance#name DataGoogleSqlDatabaseInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance#id DataGoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/data-sources/sql_database_instance#project DataGoogleSqlDatabaseInstance#project}

---

### DataGoogleSqlDatabaseInstanceIpAddress <a name="DataGoogleSqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceIpAddress: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress = { ... }
```


### DataGoogleSqlDatabaseInstanceReplicaConfiguration <a name="DataGoogleSqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceReplicaConfiguration: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration = { ... }
```


### DataGoogleSqlDatabaseInstanceRestoreBackupContext <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceRestoreBackupContext: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext = { ... }
```


### DataGoogleSqlDatabaseInstanceServerCaCert <a name="DataGoogleSqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceServerCaCert: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert = { ... }
```


### DataGoogleSqlDatabaseInstanceSettings <a name="DataGoogleSqlDatabaseInstanceSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettings: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsBackupConfiguration: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsDatabaseFlags: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfig <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsInsightsConfig: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsIpConfiguration: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsLocationPreference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsLocationPreference: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy = { ... }
```


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

const dataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig: dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabaseInstanceCloneList <a name="DataGoogleSqlDatabaseInstanceCloneList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceCloneOutputReference <a name="DataGoogleSqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames">databaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime">pointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">sourceInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

---

##### `databaseNames`<sup>Required</sup> <a name="databaseNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```typescript
public readonly databaseNames: string[];
```

- *Type:* string[]

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```typescript
public readonly pointInTime: string;
```

- *Type:* string

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```typescript
public readonly sourceInstanceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceClone;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a>

---


### DataGoogleSqlDatabaseInstanceIpAddressList <a name="DataGoogleSqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceIpAddressOutputReference <a name="DataGoogleSqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">timeToRetire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `timeToRetire`<sup>Required</sup> <a name="timeToRetire" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```typescript
public readonly timeToRetire: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a>

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationList <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">connectRetryInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">failoverTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">sslCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `connectRetryInterval`<sup>Required</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```typescript
public readonly connectRetryInterval: number;
```

- *Type:* number

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

---

##### `failoverTarget`<sup>Required</sup> <a name="failoverTarget" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```typescript
public readonly failoverTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `masterHeartbeatPeriod`<sup>Required</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```typescript
public readonly masterHeartbeatPeriod: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sslCipher`<sup>Required</sup> <a name="sslCipher" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```typescript
public readonly sslCipher: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyServerCertificate`<sup>Required</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```typescript
public readonly verifyServerCertificate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextList <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">backupRunId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```typescript
public readonly backupRunId: number;
```

- *Type:* number

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceRestoreBackupContext;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a>

---


### DataGoogleSqlDatabaseInstanceServerCaCertList <a name="DataGoogleSqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceServerCaCertOutputReference <a name="DataGoogleSqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceServerCaCert;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a>

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retainedBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```typescript
public readonly retainedBackups: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRetentionSettings`<sup>Required</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```typescript
public readonly backupRetentionSettings: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a>

---

##### `binaryLogEnabled`<sup>Required</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```typescript
public readonly binaryLogEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `transactionLogRetentionDays`<sup>Required</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```typescript
public readonly transactionLogRetentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInsightsEnabled`<sup>Required</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```typescript
public readonly queryInsightsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">privateNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl">requireSsl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```typescript
public readonly authorizedNetworks: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```typescript
public readonly enablePrivatePathForGoogleCloudServices: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privateNetwork`<sup>Required</sup> <a name="privateNetwork" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```typescript
public readonly privateNetwork: string;
```

- *Type:* string

---

##### `requireSsl`<sup>Required</sup> <a name="requireSsl" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl"></a>

```typescript
public readonly requireSsl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">followGaeApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">secondaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `followGaeApplication`<sup>Required</sup> <a name="followGaeApplication" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```typescript
public readonly followGaeApplication: string;
```

- *Type:* string

---

##### `secondaryZone`<sup>Required</sup> <a name="secondaryZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```typescript
public readonly secondaryZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsLocationPreference;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a>

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">updateTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `updateTrack`<sup>Required</sup> <a name="updateTrack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```typescript
public readonly updateTrack: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### DataGoogleSqlDatabaseInstanceSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">activationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType">availabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">connectorEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">diskAutoresize</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels">userLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```typescript
public readonly activationPolicy: string;
```

- *Type:* string

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```typescript
public readonly activeDirectoryConfig: DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a>

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a>

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `connectorEnforcement`<sup>Required</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```typescript
public readonly connectorEnforcement: string;
```

- *Type:* string

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a>

---

##### `diskAutoresize`<sup>Required</sup> <a name="diskAutoresize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```typescript
public readonly diskAutoresize: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskAutoresizeLimit`<sup>Required</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```typescript
public readonly diskAutoresizeLimit: number;
```

- *Type:* number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `insightsConfig`<sup>Required</sup> <a name="insightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```typescript
public readonly insightsConfig: DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a>

---

##### `locationPreference`<sup>Required</sup> <a name="locationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```typescript
public readonly locationPreference: DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a>

---

##### `passwordValidationPolicy`<sup>Required</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```typescript
public readonly passwordValidationPolicy: DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a>

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

---

##### `sqlServerAuditConfig`<sup>Required</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```typescript
public readonly sqlServerAuditConfig: DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```typescript
public readonly userLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuseInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```typescript
public readonly complexity: string;
```

- *Type:* string

---

##### `disallowUsernameSubstring`<sup>Required</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```typescript
public readonly disallowUsernameSubstring: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```typescript
public readonly enablePasswordPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `passwordChangeInterval`<sup>Required</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```typescript
public readonly passwordChangeInterval: string;
```

- *Type:* string

---

##### `reuseInterval`<sup>Required</sup> <a name="reuseInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```typescript
public readonly reuseInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get"></a>

```typescript
public get(index: number): DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleSqlDatabaseInstance } from '@cdktf/provider-google'

new dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retentionInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">uploadInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```typescript
public readonly retentionInterval: string;
```

- *Type:* string

---

##### `uploadInterval`<sup>Required</sup> <a name="uploadInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```typescript
public readonly uploadInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---



