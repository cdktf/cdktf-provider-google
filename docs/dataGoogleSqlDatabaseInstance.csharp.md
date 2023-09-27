# `data_google_sql_database_instance`

Refer to the Terraform Registory for docs: [`data_google_sql_database_instance`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance).

# `dataGoogleSqlDatabaseInstance` Submodule <a name="`dataGoogleSqlDatabaseInstance` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstance <a name="DataGoogleSqlDatabaseInstance" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstance(Construct Scope, string Id, DataGoogleSqlDatabaseInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig">DataGoogleSqlDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig">DataGoogleSqlDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSqlDatabaseInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSqlDatabaseInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSqlDatabaseInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions">AvailableMaintenanceVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection">DeletionProtection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress">FirstIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName">MasterInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pscServiceAttachmentLink">PscServiceAttachmentLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword">RootPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert">ServerCaCert</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress">ServiceAccountEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailableMaintenanceVersions`<sup>Required</sup> <a name="AvailableMaintenanceVersions" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```csharp
public string[] AvailableMaintenanceVersions { get; }
```

- *Type:* string[]

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.clone"></a>

```csharp
public DataGoogleSqlDatabaseInstanceCloneList Clone { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList">DataGoogleSqlDatabaseInstanceCloneList</a>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `EncryptionKeyName`<sup>Required</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.encryptionKeyName"></a>

```csharp
public string EncryptionKeyName { get; }
```

- *Type:* string

---

##### `FirstIpAddress`<sup>Required</sup> <a name="FirstIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.firstIpAddress"></a>

```csharp
public string FirstIpAddress { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.ipAddress"></a>

```csharp
public DataGoogleSqlDatabaseInstanceIpAddressList IpAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList">DataGoogleSqlDatabaseInstanceIpAddressList</a>

---

##### `MaintenanceVersion`<sup>Required</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.maintenanceVersion"></a>

```csharp
public string MaintenanceVersion { get; }
```

- *Type:* string

---

##### `MasterInstanceName`<sup>Required</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.masterInstanceName"></a>

```csharp
public string MasterInstanceName { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PscServiceAttachmentLink`<sup>Required</sup> <a name="PscServiceAttachmentLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```csharp
public string PscServiceAttachmentLink { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.replicaConfiguration"></a>

```csharp
public DataGoogleSqlDatabaseInstanceReplicaConfigurationList ReplicaConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList">DataGoogleSqlDatabaseInstanceReplicaConfigurationList</a>

---

##### `RestoreBackupContext`<sup>Required</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.restoreBackupContext"></a>

```csharp
public DataGoogleSqlDatabaseInstanceRestoreBackupContextList RestoreBackupContext { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList">DataGoogleSqlDatabaseInstanceRestoreBackupContextList</a>

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.rootPassword"></a>

```csharp
public string RootPassword { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServerCaCert`<sup>Required</sup> <a name="ServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serverCaCert"></a>

```csharp
public DataGoogleSqlDatabaseInstanceServerCaCertList ServerCaCert { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList">DataGoogleSqlDatabaseInstanceServerCaCertList</a>

---

##### `ServiceAccountEmailAddress`<sup>Required</sup> <a name="ServiceAccountEmailAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```csharp
public string ServiceAccountEmailAddress { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.settings"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList">DataGoogleSqlDatabaseInstanceSettingsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstanceClone <a name="DataGoogleSqlDatabaseInstanceClone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceClone {

};
```


### DataGoogleSqlDatabaseInstanceConfig <a name="DataGoogleSqlDatabaseInstanceConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance#id DataGoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance#name DataGoogleSqlDatabaseInstance#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance#id DataGoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/sql_database_instance#project DataGoogleSqlDatabaseInstance#project}

---

### DataGoogleSqlDatabaseInstanceIpAddress <a name="DataGoogleSqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceIpAddress {

};
```


### DataGoogleSqlDatabaseInstanceReplicaConfiguration <a name="DataGoogleSqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceReplicaConfiguration {

};
```


### DataGoogleSqlDatabaseInstanceRestoreBackupContext <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceRestoreBackupContext {

};
```


### DataGoogleSqlDatabaseInstanceServerCaCert <a name="DataGoogleSqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceServerCaCert {

};
```


### DataGoogleSqlDatabaseInstanceSettings <a name="DataGoogleSqlDatabaseInstanceSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettings {

};
```


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig {

};
```


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures {

};
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration {

};
```


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {

};
```


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags {

};
```


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig {

};
```


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod {

};
```


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfig <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsInsightsConfig {

};
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfiguration <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfiguration {

};
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {

};
```


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig {

};
```


### DataGoogleSqlDatabaseInstanceSettingsLocationPreference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsLocationPreference {

};
```


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow {

};
```


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy {

};
```


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabaseInstanceCloneList <a name="DataGoogleSqlDatabaseInstanceCloneList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceCloneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceCloneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceCloneOutputReference <a name="DataGoogleSqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceCloneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames">DatabaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime">PointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">SourceInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; }
```

- *Type:* string

---

##### `DatabaseNames`<sup>Required</sup> <a name="DatabaseNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```csharp
public string[] DatabaseNames { get; }
```

- *Type:* string[]

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```csharp
public string PointInTime { get; }
```

- *Type:* string

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```csharp
public string SourceInstanceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceClone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceClone">DataGoogleSqlDatabaseInstanceClone</a>

---


### DataGoogleSqlDatabaseInstanceIpAddressList <a name="DataGoogleSqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceIpAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceIpAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceIpAddressOutputReference <a name="DataGoogleSqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceIpAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">TimeToRetire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `TimeToRetire`<sup>Required</sup> <a name="TimeToRetire" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```csharp
public string TimeToRetire { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceIpAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceIpAddress">DataGoogleSqlDatabaseInstanceIpAddress</a>

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationList <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceReplicaConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">DumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">FailoverTarget</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">SslCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `ConnectRetryInterval`<sup>Required</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```csharp
public double ConnectRetryInterval { get; }
```

- *Type:* double

---

##### `DumpFilePath`<sup>Required</sup> <a name="DumpFilePath" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```csharp
public string DumpFilePath { get; }
```

- *Type:* string

---

##### `FailoverTarget`<sup>Required</sup> <a name="FailoverTarget" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```csharp
public IResolvable FailoverTarget { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MasterHeartbeatPeriod`<sup>Required</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```csharp
public double MasterHeartbeatPeriod { get; }
```

- *Type:* double

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SslCipher`<sup>Required</sup> <a name="SslCipher" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```csharp
public string SslCipher { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyServerCertificate`<sup>Required</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```csharp
public IResolvable VerifyServerCertificate { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceReplicaConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceReplicaConfiguration">DataGoogleSqlDatabaseInstanceReplicaConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextList <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceRestoreBackupContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference <a name="DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">BackupRunId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```csharp
public double BackupRunId { get; }
```

- *Type:* double

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceRestoreBackupContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceRestoreBackupContext">DataGoogleSqlDatabaseInstanceRestoreBackupContext</a>

---


### DataGoogleSqlDatabaseInstanceServerCaCertList <a name="DataGoogleSqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceServerCaCertList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceServerCaCertOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceServerCaCertOutputReference <a name="DataGoogleSqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceServerCaCertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceServerCaCert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceServerCaCert">DataGoogleSqlDatabaseInstanceServerCaCert</a>

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">RetainedBackups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```csharp
public double RetainedBackups { get; }
```

- *Type:* double

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```csharp
public string RetentionUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupRetentionSettings`<sup>Required</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList BackupRetentionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList</a>

---

##### `BinaryLogEnabled`<sup>Required</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```csharp
public IResolvable BinaryLogEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```csharp
public IResolvable PointInTimeRecoveryEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TransactionLogRetentionDays`<sup>Required</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```csharp
public double TransactionLogRetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration">DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">DataCacheEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCacheEnabled`<sup>Required</sup> <a name="DataCacheEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```csharp
public IResolvable DataCacheEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">QueryStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">RecordClientAddress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInsightsEnabled`<sup>Required</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```csharp
public IResolvable QueryInsightsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QueryPlansPerMinute`<sup>Required</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```csharp
public double QueryPlansPerMinute { get; }
```

- *Type:* double

---

##### `QueryStringLength`<sup>Required</sup> <a name="QueryStringLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```csharp
public double QueryStringLength { get; }
```

- *Type:* double

---

##### `RecordApplicationTags`<sup>Required</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```csharp
public IResolvable RecordApplicationTags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RecordClientAddress`<sup>Required</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```csharp
public IResolvable RecordClientAddress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsInsightsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfig">DataGoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">PrivateNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl">RequireSsl</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```csharp
public string AllocatedIpRange { get; }
```

- *Type:* string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList AuthorizedNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```csharp
public IResolvable EnablePrivatePathForGoogleCloudServices { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```csharp
public IResolvable Ipv4Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrivateNetwork`<sup>Required</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```csharp
public string PrivateNetwork { get; }
```

- *Type:* string

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList PscConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `RequireSsl`<sup>Required</sup> <a name="RequireSsl" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl"></a>

```csharp
public IResolvable RequireSsl { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfiguration">DataGoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">AllowedConsumerProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">PscEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedConsumerProjects`<sup>Required</sup> <a name="AllowedConsumerProjects" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```csharp
public string[] AllowedConsumerProjects { get; }
```

- *Type:* string[]

---

##### `PscEnabled`<sup>Required</sup> <a name="PscEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```csharp
public IResolvable PscEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>

---


### DataGoogleSqlDatabaseInstanceSettingsList <a name="DataGoogleSqlDatabaseInstanceSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">SecondaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FollowGaeApplication`<sup>Required</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```csharp
public string FollowGaeApplication { get; }
```

- *Type:* string

---

##### `SecondaryZone`<sup>Required</sup> <a name="SecondaryZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```csharp
public string SecondaryZone { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsLocationPreference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreference">DataGoogleSqlDatabaseInstanceSettingsLocationPreference</a>

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">UpdateTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `UpdateTrack`<sup>Required</sup> <a name="UpdateTrack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```csharp
public string UpdateTrack { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### DataGoogleSqlDatabaseInstanceSettingsOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">ActivationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType">AvailabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">DiskAutoresize</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize">DiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels">UserLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```csharp
public string ActivationPolicy { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList ActiveDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList</a>

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList">DataGoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList</a>

---

##### `AvailabilityType`<sup>Required</sup> <a name="AvailabilityType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```csharp
public string AvailabilityType { get; }
```

- *Type:* string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList BackupConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationList</a>

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `ConnectorEnforcement`<sup>Required</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```csharp
public string ConnectorEnforcement { get; }
```

- *Type:* string

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList DatabaseFlags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList DataCacheConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList">DataGoogleSqlDatabaseInstanceSettingsDataCacheConfigList</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```csharp
public IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList DenyMaintenancePeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList</a>

---

##### `DiskAutoresize`<sup>Required</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```csharp
public IResolvable DiskAutoresize { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DiskAutoresizeLimit`<sup>Required</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```csharp
public double DiskAutoresizeLimit { get; }
```

- *Type:* double

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```csharp
public double DiskSize { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `InsightsConfig`<sup>Required</sup> <a name="InsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList InsightsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList">DataGoogleSqlDatabaseInstanceSettingsInsightsConfigList</a>

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList IpConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList">DataGoogleSqlDatabaseInstanceSettingsIpConfigurationList</a>

---

##### `LocationPreference`<sup>Required</sup> <a name="LocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList LocationPreference { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstanceSettingsLocationPreferenceList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindowList</a>

---

##### `PasswordValidationPolicy`<sup>Required</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList PasswordValidationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList</a>

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; }
```

- *Type:* string

---

##### `SqlServerAuditConfig`<sup>Required</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList SqlServerAuditConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```csharp
public StringMap UserLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettings">DataGoogleSqlDatabaseInstanceSettings</a>

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">Complexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">ReuseInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Complexity`<sup>Required</sup> <a name="Complexity" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```csharp
public string Complexity { get; }
```

- *Type:* string

---

##### `DisallowUsernameSubstring`<sup>Required</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```csharp
public IResolvable DisallowUsernameSubstring { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```csharp
public IResolvable EnablePasswordPolicy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `PasswordChangeInterval`<sup>Required</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```csharp
public string PasswordChangeInterval { get; }
```

- *Type:* string

---

##### `ReuseInterval`<sup>Required</sup> <a name="ReuseInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```csharp
public double ReuseInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get"></a>

```csharp
private DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">RetentionInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">UploadInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```csharp
public string RetentionInterval { get; }
```

- *Type:* string

---

##### `UploadInterval`<sup>Required</sup> <a name="UploadInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```csharp
public string UploadInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstance.DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---



