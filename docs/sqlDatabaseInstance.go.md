# `sqlDatabaseInstance` Submodule <a name="`sqlDatabaseInstance` Submodule" id="@cdktf/provider-google.sqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabaseInstance <a name="SqlDatabaseInstance" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstance(scope Construct, id *string, config SqlDatabaseInstanceConfig) SqlDatabaseInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone">PutClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration">PutReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext">PutRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone">ResetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName">ResetEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion">ResetMaintenanceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName">ResetMasterInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration">ResetReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext">ResetRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword">ResetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone"></a>

```go
func PutClone(value SqlDatabaseInstanceClone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `PutReplicaConfiguration` <a name="PutReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration"></a>

```go
func PutReplicaConfiguration(value SqlDatabaseInstanceReplicaConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `PutRestoreBackupContext` <a name="PutRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext"></a>

```go
func PutRestoreBackupContext(value SqlDatabaseInstanceRestoreBackupContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings"></a>

```go
func PutSettings(value SqlDatabaseInstanceSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts"></a>

```go
func PutTimeouts(value SqlDatabaseInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone"></a>

```go
func ResetClone()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEncryptionKeyName` <a name="ResetEncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName"></a>

```go
func ResetEncryptionKeyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetMaintenanceVersion` <a name="ResetMaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion"></a>

```go
func ResetMaintenanceVersion()
```

##### `ResetMasterInstanceName` <a name="ResetMasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName"></a>

```go
func ResetMasterInstanceName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReplicaConfiguration` <a name="ResetReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration"></a>

```go
func ResetReplicaConfiguration()
```

##### `ResetRestoreBackupContext` <a name="ResetRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext"></a>

```go
func ResetRestoreBackupContext()
```

##### `ResetRootPassword` <a name="ResetRootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword"></a>

```go
func ResetRootPassword()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.SqlDatabaseInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.SqlDatabaseInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.SqlDatabaseInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions">AvailableMaintenanceVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress">FirstIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert">ServerCaCert</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress">ServiceAccountEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput">EncryptionKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput">MaintenanceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput">MasterInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput">ReplicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput">RestoreBackupContextInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput">RootPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName">MasterInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword">RootPassword</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableMaintenanceVersions`<sup>Required</sup> <a name="AvailableMaintenanceVersions" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```go
func AvailableMaintenanceVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone"></a>

```go
func Clone() SqlDatabaseInstanceCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `FirstIpAddress`<sup>Required</sup> <a name="FirstIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress"></a>

```go
func FirstIpAddress() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress"></a>

```go
func IpAddress() SqlDatabaseInstanceIpAddressList
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration"></a>

```go
func ReplicaConfiguration() SqlDatabaseInstanceReplicaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a>

---

##### `RestoreBackupContext`<sup>Required</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext"></a>

```go
func RestoreBackupContext() SqlDatabaseInstanceRestoreBackupContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerCaCert`<sup>Required</sup> <a name="ServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert"></a>

```go
func ServerCaCert() SqlDatabaseInstanceServerCaCertList
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a>

---

##### `ServiceAccountEmailAddress`<sup>Required</sup> <a name="ServiceAccountEmailAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```go
func ServiceAccountEmailAddress() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings"></a>

```go
func Settings() SqlDatabaseInstanceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts"></a>

```go
func Timeouts() SqlDatabaseInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a>

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput"></a>

```go
func CloneInput() SqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyNameInput`<sup>Optional</sup> <a name="EncryptionKeyNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput"></a>

```go
func EncryptionKeyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MaintenanceVersionInput`<sup>Optional</sup> <a name="MaintenanceVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput"></a>

```go
func MaintenanceVersionInput() *string
```

- *Type:* *string

---

##### `MasterInstanceNameInput`<sup>Optional</sup> <a name="MasterInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput"></a>

```go
func MasterInstanceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplicaConfigurationInput`<sup>Optional</sup> <a name="ReplicaConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput"></a>

```go
func ReplicaConfigurationInput() SqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `RestoreBackupContextInput`<sup>Optional</sup> <a name="RestoreBackupContextInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput"></a>

```go
func RestoreBackupContextInput() SqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `RootPasswordInput`<sup>Optional</sup> <a name="RootPasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput"></a>

```go
func RootPasswordInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput"></a>

```go
func SettingsInput() SqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyName`<sup>Required</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName"></a>

```go
func EncryptionKeyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MaintenanceVersion`<sup>Required</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion"></a>

```go
func MaintenanceVersion() *string
```

- *Type:* *string

---

##### `MasterInstanceName`<sup>Required</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName"></a>

```go
func MasterInstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword"></a>

```go
func RootPassword() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseInstanceClone <a name="SqlDatabaseInstanceClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceClone {
	SourceInstanceName: *string,
	AllocatedIpRange: *string,
	DatabaseNames: *[]*string,
	PointInTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName">SourceInstanceName</a></code> | <code>*string</code> | The name of the instance from which the point in time should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames">DatabaseNames</a></code> | <code>*[]*string</code> | (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime">PointInTime</a></code> | <code>*string</code> | The timestamp of the point in time that should be restored. |

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName"></a>

```go
SourceInstanceName *string
```

- *Type:* *string

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#source_instance_name SqlDatabaseInstance#source_instance_name}

---

##### `AllocatedIpRange`<sup>Optional</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange"></a>

```go
AllocatedIpRange *string
```

- *Type:* *string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `DatabaseNames`<sup>Optional</sup> <a name="DatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames"></a>

```go
DatabaseNames *[]*string
```

- *Type:* *[]*string

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#database_names SqlDatabaseInstance#database_names}

---

##### `PointInTime`<sup>Optional</sup> <a name="PointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime"></a>

```go
PointInTime *string
```

- *Type:* *string

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#point_in_time SqlDatabaseInstance#point_in_time}

---

### SqlDatabaseInstanceConfig <a name="SqlDatabaseInstanceConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseVersion: *string,
	Clone: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceClone,
	DeletionProtection: interface{},
	EncryptionKeyName: *string,
	Id: *string,
	InstanceType: *string,
	MaintenanceVersion: *string,
	MasterInstanceName: *string,
	Name: *string,
	Project: *string,
	Region: *string,
	ReplicaConfiguration: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration,
	RestoreBackupContext: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext,
	RootPassword: *string,
	Settings: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettings,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#id SqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>*string</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName">MasterInstanceName</a></code> | <code>*string</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region">Region</a></code> | <code>*string</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword">RootPassword</a></code> | <code>*string</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#database_version SqlDatabaseInstance#database_version}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone"></a>

```go
Clone SqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#clone SqlDatabaseInstance#clone}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}

---

##### `EncryptionKeyName`<sup>Optional</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName"></a>

```go
EncryptionKeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#id SqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#instance_type SqlDatabaseInstance#instance_type}

---

##### `MaintenanceVersion`<sup>Optional</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion"></a>

```go
MaintenanceVersion *string
```

- *Type:* *string

Maintenance version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#maintenance_version SqlDatabaseInstance#maintenance_version}

---

##### `MasterInstanceName`<sup>Optional</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName"></a>

```go
MasterInstanceName *string
```

- *Type:* *string

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#project SqlDatabaseInstance#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#region SqlDatabaseInstance#region}

---

##### `ReplicaConfiguration`<sup>Optional</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration"></a>

```go
ReplicaConfiguration SqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}

---

##### `RestoreBackupContext`<sup>Optional</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext"></a>

```go
RestoreBackupContext SqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}

---

##### `RootPassword`<sup>Optional</sup> <a name="RootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword"></a>

```go
RootPassword *string
```

- *Type:* *string

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#root_password SqlDatabaseInstance#root_password}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings"></a>

```go
Settings SqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#settings SqlDatabaseInstance#settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts"></a>

```go
Timeouts SqlDatabaseInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}

---

### SqlDatabaseInstanceIpAddress <a name="SqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceIpAddress {

}
```


### SqlDatabaseInstanceReplicaConfiguration <a name="SqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceReplicaConfiguration {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
	ConnectRetryInterval: *f64,
	DumpFilePath: *string,
	FailoverTarget: interface{},
	MasterHeartbeatPeriod: *f64,
	Password: *string,
	SslCipher: *string,
	Username: *string,
	VerifyServerCertificate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM representation of the trusted CA's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM representation of the replica's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>*f64</code> | The number of seconds between connect retries. MySQL's default is 60 seconds. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath">DumpFilePath</a></code> | <code>*string</code> | Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget">FailoverTarget</a></code> | <code>interface{}</code> | Specifies if the replica is the failover target. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>*f64</code> | Time in ms between replication heartbeats. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password">Password</a></code> | <code>*string</code> | Password for the replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher">SslCipher</a></code> | <code>*string</code> | Permissible ciphers for use in SSL encryption. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username">Username</a></code> | <code>*string</code> | Username for replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>interface{}</code> | True if the master's common name value is checked during the SSL handshake. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ca_certificate SqlDatabaseInstance#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#client_certificate SqlDatabaseInstance#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#client_key SqlDatabaseInstance#client_key}

---

##### `ConnectRetryInterval`<sup>Optional</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval"></a>

```go
ConnectRetryInterval *f64
```

- *Type:* *f64

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}

---

##### `DumpFilePath`<sup>Optional</sup> <a name="DumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath"></a>

```go
DumpFilePath *string
```

- *Type:* *string

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#dump_file_path SqlDatabaseInstance#dump_file_path}

---

##### `FailoverTarget`<sup>Optional</sup> <a name="FailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget"></a>

```go
FailoverTarget interface{}
```

- *Type:* interface{}

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#failover_target SqlDatabaseInstance#failover_target}

---

##### `MasterHeartbeatPeriod`<sup>Optional</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod"></a>

```go
MasterHeartbeatPeriod *f64
```

- *Type:* *f64

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the replication connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password SqlDatabaseInstance#password}

---

##### `SslCipher`<sup>Optional</sup> <a name="SslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher"></a>

```go
SslCipher *string
```

- *Type:* *string

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ssl_cipher SqlDatabaseInstance#ssl_cipher}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for replication connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#username SqlDatabaseInstance#username}

---

##### `VerifyServerCertificate`<sup>Optional</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate"></a>

```go
VerifyServerCertificate interface{}
```

- *Type:* interface{}

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}

---

### SqlDatabaseInstanceRestoreBackupContext <a name="SqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceRestoreBackupContext {
	BackupRunId: *f64,
	InstanceId: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId">BackupRunId</a></code> | <code>*f64</code> | The ID of the backup run to restore from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId">InstanceId</a></code> | <code>*string</code> | The ID of the instance that the backup was taken from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project">Project</a></code> | <code>*string</code> | The full project ID of the source instance. |

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId"></a>

```go
BackupRunId *f64
```

- *Type:* *f64

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_run_id SqlDatabaseInstance#backup_run_id}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#instance_id SqlDatabaseInstance#instance_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project"></a>

```go
Project *string
```

- *Type:* *string

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#project SqlDatabaseInstance#project}

---

### SqlDatabaseInstanceServerCaCert <a name="SqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceServerCaCert {

}
```


### SqlDatabaseInstanceSettings <a name="SqlDatabaseInstanceSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettings {
	Tier: *string,
	ActivationPolicy: *string,
	ActiveDirectoryConfig: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig,
	AvailabilityType: *string,
	BackupConfiguration: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration,
	Collation: *string,
	ConnectorEnforcement: *string,
	DatabaseFlags: interface{},
	DeletionProtectionEnabled: interface{},
	DenyMaintenancePeriod: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod,
	DiskAutoresize: interface{},
	DiskAutoresizeLimit: *f64,
	DiskSize: *f64,
	DiskType: *string,
	InsightsConfig: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig,
	IpConfiguration: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration,
	LocationPreference: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow,
	PasswordValidationPolicy: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy,
	PricingPlan: *string,
	SqlServerAuditConfig: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig,
	TimeZone: *string,
	UserLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier">Tier</a></code> | <code>*string</code> | The machine type to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy">ActivationPolicy</a></code> | <code>*string</code> | This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType">AvailabilityType</a></code> | <code>*string</code> | The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | backup_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation">Collation</a></code> | <code>*string</code> | The name of server instance collation. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>*string</code> | Specifies if connections must use Cloud SQL connectors. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags">DatabaseFlags</a></code> | <code>interface{}</code> | database_flags block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Configuration to protect against accidental instance deletion. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize">DiskAutoresize</a></code> | <code>interface{}</code> | Enables auto-resizing of the storage size. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>*f64</code> | The maximum size, in GB, to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize">DiskSize</a></code> | <code>*f64</code> | The size of data disk, in GB. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType">DiskType</a></code> | <code>*string</code> | The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | insights_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | location_preference block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | password_validation_policy block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | Pricing plan for this instance, can only be PER_USE. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | sql_server_audit_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | A set of key/value user label pairs to assign to the instance. |

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#tier SqlDatabaseInstance#tier}

---

##### `ActivationPolicy`<sup>Optional</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy"></a>

```go
ActivationPolicy *string
```

- *Type:* *string

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#activation_policy SqlDatabaseInstance#activation_policy}

---

##### `ActiveDirectoryConfig`<sup>Optional</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig"></a>

```go
ActiveDirectoryConfig SqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#active_directory_config SqlDatabaseInstance#active_directory_config}

---

##### `AvailabilityType`<sup>Optional</sup> <a name="AvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType"></a>

```go
AvailabilityType *string
```

- *Type:* *string

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#availability_type SqlDatabaseInstance#availability_type}

---

##### `BackupConfiguration`<sup>Optional</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration"></a>

```go
BackupConfiguration SqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_configuration SqlDatabaseInstance#backup_configuration}

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

The name of server instance collation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#collation SqlDatabaseInstance#collation}

---

##### `ConnectorEnforcement`<sup>Optional</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement"></a>

```go
ConnectorEnforcement *string
```

- *Type:* *string

Specifies if connections must use Cloud SQL connectors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#connector_enforcement SqlDatabaseInstance#connector_enforcement}

---

##### `DatabaseFlags`<sup>Optional</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags"></a>

```go
DatabaseFlags interface{}
```

- *Type:* interface{}

database_flags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#database_flags SqlDatabaseInstance#database_flags}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#deletion_protection_enabled SqlDatabaseInstance#deletion_protection_enabled}

---

##### `DenyMaintenancePeriod`<sup>Optional</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod"></a>

```go
DenyMaintenancePeriod SqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#deny_maintenance_period SqlDatabaseInstance#deny_maintenance_period}

---

##### `DiskAutoresize`<sup>Optional</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize"></a>

```go
DiskAutoresize interface{}
```

- *Type:* interface{}

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_autoresize SqlDatabaseInstance#disk_autoresize}

---

##### `DiskAutoresizeLimit`<sup>Optional</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit"></a>

```go
DiskAutoresizeLimit *f64
```

- *Type:* *f64

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize"></a>

```go
DiskSize *f64
```

- *Type:* *f64

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_size SqlDatabaseInstance#disk_size}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_type SqlDatabaseInstance#disk_type}

---

##### `InsightsConfig`<sup>Optional</sup> <a name="InsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig"></a>

```go
InsightsConfig SqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#insights_config SqlDatabaseInstance#insights_config}

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration"></a>

```go
IpConfiguration SqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ip_configuration SqlDatabaseInstance#ip_configuration}

---

##### `LocationPreference`<sup>Optional</sup> <a name="LocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference"></a>

```go
LocationPreference SqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#location_preference SqlDatabaseInstance#location_preference}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow"></a>

```go
MaintenanceWindow SqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#maintenance_window SqlDatabaseInstance#maintenance_window}

---

##### `PasswordValidationPolicy`<sup>Optional</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy"></a>

```go
PasswordValidationPolicy SqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password_validation_policy SqlDatabaseInstance#password_validation_policy}

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan"></a>

```go
PricingPlan *string
```

- *Type:* *string

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#pricing_plan SqlDatabaseInstance#pricing_plan}

---

##### `SqlServerAuditConfig`<sup>Optional</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig"></a>

```go
SqlServerAuditConfig SqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#sql_server_audit_config SqlDatabaseInstance#sql_server_audit_config}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#time_zone SqlDatabaseInstance#time_zone}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#user_labels SqlDatabaseInstance#user_labels}

---

### SqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig {
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain">Domain</a></code> | <code>*string</code> | Domain name of the Active Directory for SQL Server (e.g., mydomain.com). |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#domain SqlDatabaseInstance#domain}

---

### SqlDatabaseInstanceSettingsBackupConfiguration <a name="SqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsBackupConfiguration {
	BackupRetentionSettings: github.com/cdktf/cdktf-provider-google-go/google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings,
	BinaryLogEnabled: interface{},
	Enabled: interface{},
	Location: *string,
	PointInTimeRecoveryEnabled: interface{},
	StartTime: *string,
	TransactionLogRetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | backup_retention_settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>interface{}</code> | True if binary logging is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if backup configuration is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location">Location</a></code> | <code>*string</code> | Location of the backup configuration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>interface{}</code> | True if Point-in-time recovery is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime">StartTime</a></code> | <code>*string</code> | HH:MM format time indicating when backup configuration starts. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>*f64</code> | The number of days of transaction logs we retain for point in time restore, from 1-7. |

---

##### `BackupRetentionSettings`<sup>Optional</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings"></a>

```go
BackupRetentionSettings SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}

---

##### `BinaryLogEnabled`<sup>Optional</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled"></a>

```go
BinaryLogEnabled interface{}
```

- *Type:* interface{}

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#enabled SqlDatabaseInstance#enabled}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the backup configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#location SqlDatabaseInstance#location}

---

##### `PointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled"></a>

```go
PointInTimeRecoveryEnabled interface{}
```

- *Type:* interface{}

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#start_time SqlDatabaseInstance#start_time}

---

##### `TransactionLogRetentionDays`<sup>Optional</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays"></a>

```go
TransactionLogRetentionDays *f64
```

- *Type:* *f64

The number of days of transaction logs we retain for point in time restore, from 1-7.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}

---

### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
	RetainedBackups: *f64,
	RetentionUnit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups">RetainedBackups</a></code> | <code>*f64</code> | Number of backups to retain. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | The unit that 'retainedBackups' represents. Defaults to COUNT. |

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups"></a>

```go
RetainedBackups *f64
```

- *Type:* *f64

Number of backups to retain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retained_backups SqlDatabaseInstance#retained_backups}

---

##### `RetentionUnit`<sup>Optional</sup> <a name="RetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit"></a>

```go
RetentionUnit *string
```

- *Type:* *string

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retention_unit SqlDatabaseInstance#retention_unit}

---

### SqlDatabaseInstanceSettingsDatabaseFlags <a name="SqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsDatabaseFlags {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name">Name</a></code> | <code>*string</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value">Value</a></code> | <code>*string</code> | Value of the flag. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the flag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the flag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#value SqlDatabaseInstance#value}

---

### SqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod {
	EndDate: *string,
	StartDate: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate">EndDate</a></code> | <code>*string</code> | End date before which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate">StartDate</a></code> | <code>*string</code> | Start date after which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time">Time</a></code> | <code>*string</code> | Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#end_date SqlDatabaseInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#start_date SqlDatabaseInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time"></a>

```go
Time *string
```

- *Type:* *string

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#time SqlDatabaseInstance#time}

---

### SqlDatabaseInstanceSettingsInsightsConfig <a name="SqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsInsightsConfig {
	QueryInsightsEnabled: interface{},
	QueryPlansPerMinute: *f64,
	QueryStringLength: *f64,
	RecordApplicationTags: interface{},
	RecordClientAddress: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>interface{}</code> | True if Query Insights feature is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>*f64</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength">QueryStringLength</a></code> | <code>*f64</code> | Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>interface{}</code> | True if Query Insights will record application tags from query when enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress">RecordClientAddress</a></code> | <code>interface{}</code> | True if Query Insights will record client address when enabled. |

---

##### `QueryInsightsEnabled`<sup>Optional</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled"></a>

```go
QueryInsightsEnabled interface{}
```

- *Type:* interface{}

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}

---

##### `QueryPlansPerMinute`<sup>Optional</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute"></a>

```go
QueryPlansPerMinute *f64
```

- *Type:* *f64

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#query_plans_per_minute SqlDatabaseInstance#query_plans_per_minute}

---

##### `QueryStringLength`<sup>Optional</sup> <a name="QueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength"></a>

```go
QueryStringLength *f64
```

- *Type:* *f64

Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#query_string_length SqlDatabaseInstance#query_string_length}

---

##### `RecordApplicationTags`<sup>Optional</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags"></a>

```go
RecordApplicationTags interface{}
```

- *Type:* interface{}

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#record_application_tags SqlDatabaseInstance#record_application_tags}

---

##### `RecordClientAddress`<sup>Optional</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress"></a>

```go
RecordClientAddress interface{}
```

- *Type:* interface{}

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#record_client_address SqlDatabaseInstance#record_client_address}

---

### SqlDatabaseInstanceSettingsIpConfiguration <a name="SqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsIpConfiguration {
	AllocatedIpRange: *string,
	AuthorizedNetworks: interface{},
	EnablePrivatePathForGoogleCloudServices: interface{},
	Ipv4Enabled: interface{},
	PrivateNetwork: *string,
	RequireSsl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>interface{}</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>interface{}</code> | Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>interface{}</code> | Whether this Cloud SQL instance should be assigned a public IPV4 address. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork">PrivateNetwork</a></code> | <code>*string</code> | The VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.requireSsl">RequireSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#require_ssl SqlDatabaseInstance#require_ssl}. |

---

##### `AllocatedIpRange`<sup>Optional</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange"></a>

```go
AllocatedIpRange *string
```

- *Type:* *string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `AuthorizedNetworks`<sup>Optional</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks"></a>

```go
AuthorizedNetworks interface{}
```

- *Type:* interface{}

authorized_networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#authorized_networks SqlDatabaseInstance#authorized_networks}

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Optional</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices"></a>

```go
EnablePrivatePathForGoogleCloudServices interface{}
```

- *Type:* interface{}

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#enable_private_path_for_google_cloud_services SqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

##### `Ipv4Enabled`<sup>Optional</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled"></a>

```go
Ipv4Enabled interface{}
```

- *Type:* interface{}

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}

---

##### `PrivateNetwork`<sup>Optional</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork"></a>

```go
PrivateNetwork *string
```

- *Type:* *string

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#private_network SqlDatabaseInstance#private_network}

---

##### `RequireSsl`<sup>Optional</sup> <a name="RequireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.requireSsl"></a>

```go
RequireSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#require_ssl SqlDatabaseInstance#require_ssl}.

---

### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
	Value: *string,
	ExpirationTime: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#value SqlDatabaseInstance#value}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#value SqlDatabaseInstance#value}.

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}.

---

### SqlDatabaseInstanceSettingsLocationPreference <a name="SqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsLocationPreference {
	FollowGaeApplication: *string,
	SecondaryZone: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>*string</code> | A Google App Engine application whose zone to remain in. Must be in the same region as this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone">SecondaryZone</a></code> | <code>*string</code> | The preferred Compute Engine zone for the secondary/failover. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone">Zone</a></code> | <code>*string</code> | The preferred compute engine zone. |

---

##### `FollowGaeApplication`<sup>Optional</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication"></a>

```go
FollowGaeApplication *string
```

- *Type:* *string

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#follow_gae_application SqlDatabaseInstance#follow_gae_application}

---

##### `SecondaryZone`<sup>Optional</sup> <a name="SecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone"></a>

```go
SecondaryZone *string
```

- *Type:* *string

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#secondary_zone SqlDatabaseInstance#secondary_zone}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#zone SqlDatabaseInstance#zone}

---

### SqlDatabaseInstanceSettingsMaintenanceWindow <a name="SqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsMaintenanceWindow {
	Day: *f64,
	Hour: *f64,
	UpdateTrack: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day">Day</a></code> | <code>*f64</code> | Day of week (1-7), starting on Monday. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour">Hour</a></code> | <code>*f64</code> | Hour of day (0-23), ignored if day not set. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack">UpdateTrack</a></code> | <code>*string</code> | Receive updates earlier (canary) or later (stable). |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#day SqlDatabaseInstance#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#hour SqlDatabaseInstance#hour}

---

##### `UpdateTrack`<sup>Optional</sup> <a name="UpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack"></a>

```go
UpdateTrack *string
```

- *Type:* *string

Receive updates earlier (canary) or later (stable).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#update_track SqlDatabaseInstance#update_track}

---

### SqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy {
	EnablePasswordPolicy: interface{},
	Complexity: *string,
	DisallowUsernameSubstring: interface{},
	MinLength: *f64,
	PasswordChangeInterval: *string,
	ReuseInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>interface{}</code> | Whether the password policy is enabled or not. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity">Complexity</a></code> | <code>*string</code> | Password complexity. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>interface{}</code> | Disallow username as a part of the password. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength">MinLength</a></code> | <code>*f64</code> | Minimum number of characters allowed. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>*string</code> | Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval">ReuseInterval</a></code> | <code>*f64</code> | Number of previous passwords that cannot be reused. |

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy"></a>

```go
EnablePasswordPolicy interface{}
```

- *Type:* interface{}

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#enable_password_policy SqlDatabaseInstance#enable_password_policy}

---

##### `Complexity`<sup>Optional</sup> <a name="Complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity"></a>

```go
Complexity *string
```

- *Type:* *string

Password complexity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#complexity SqlDatabaseInstance#complexity}

---

##### `DisallowUsernameSubstring`<sup>Optional</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring"></a>

```go
DisallowUsernameSubstring interface{}
```

- *Type:* interface{}

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disallow_username_substring SqlDatabaseInstance#disallow_username_substring}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#min_length SqlDatabaseInstance#min_length}

---

##### `PasswordChangeInterval`<sup>Optional</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval"></a>

```go
PasswordChangeInterval *string
```

- *Type:* *string

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password_change_interval SqlDatabaseInstance#password_change_interval}

---

##### `ReuseInterval`<sup>Optional</sup> <a name="ReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval"></a>

```go
ReuseInterval *f64
```

- *Type:* *f64

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#reuse_interval SqlDatabaseInstance#reuse_interval}

---

### SqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig {
	Bucket: *string,
	RetentionInterval: *string,
	UploadInterval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the destination bucket (e.g., gs://mybucket). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | How long to keep generated audit files. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval">UploadInterval</a></code> | <code>*string</code> | How often to upload generated audit files. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#bucket SqlDatabaseInstance#bucket}

---

##### `RetentionInterval`<sup>Optional</sup> <a name="RetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval"></a>

```go
RetentionInterval *string
```

- *Type:* *string

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retention_interval SqlDatabaseInstance#retention_interval}

---

##### `UploadInterval`<sup>Optional</sup> <a name="UploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval"></a>

```go
UploadInterval *string
```

- *Type:* *string

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#upload_interval SqlDatabaseInstance#upload_interval}

---

### SqlDatabaseInstanceTimeouts <a name="SqlDatabaseInstanceTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

&sqldatabaseinstance.SqlDatabaseInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#create SqlDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#delete SqlDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#update SqlDatabaseInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#create SqlDatabaseInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#delete SqlDatabaseInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#update SqlDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseInstanceCloneOutputReference <a name="SqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceCloneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceCloneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange">ResetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames">ResetDatabaseNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime">ResetPointInTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocatedIpRange` <a name="ResetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange"></a>

```go
func ResetAllocatedIpRange()
```

##### `ResetDatabaseNames` <a name="ResetDatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames"></a>

```go
func ResetDatabaseNames()
```

##### `ResetPointInTime` <a name="ResetPointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime"></a>

```go
func ResetPointInTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput">AllocatedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput">DatabaseNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput">SourceInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames">DatabaseNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime">PointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">SourceInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedIpRangeInput`<sup>Optional</sup> <a name="AllocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput"></a>

```go
func AllocatedIpRangeInput() *string
```

- *Type:* *string

---

##### `DatabaseNamesInput`<sup>Optional</sup> <a name="DatabaseNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput"></a>

```go
func DatabaseNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput"></a>

```go
func PointInTimeInput() *string
```

- *Type:* *string

---

##### `SourceInstanceNameInput`<sup>Optional</sup> <a name="SourceInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput"></a>

```go
func SourceInstanceNameInput() *string
```

- *Type:* *string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```go
func AllocatedIpRange() *string
```

- *Type:* *string

---

##### `DatabaseNames`<sup>Required</sup> <a name="DatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```go
func DatabaseNames() *[]*string
```

- *Type:* *[]*string

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```go
func PointInTime() *string
```

- *Type:* *string

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```go
func SourceInstanceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---


### SqlDatabaseInstanceIpAddressList <a name="SqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlDatabaseInstanceIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get"></a>

```go
func Get(index *f64) SqlDatabaseInstanceIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlDatabaseInstanceIpAddressOutputReference <a name="SqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlDatabaseInstanceIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">TimeToRetire</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `TimeToRetire`<sup>Required</sup> <a name="TimeToRetire" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```go
func TimeToRetire() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a>

---


### SqlDatabaseInstanceReplicaConfigurationOutputReference <a name="SqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceReplicaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceReplicaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval">ResetConnectRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath">ResetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget">ResetFailoverTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod">ResetMasterHeartbeatPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher">ResetSslCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate">ResetVerifyServerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate"></a>

```go
func ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetConnectRetryInterval` <a name="ResetConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval"></a>

```go
func ResetConnectRetryInterval()
```

##### `ResetDumpFilePath` <a name="ResetDumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath"></a>

```go
func ResetDumpFilePath()
```

##### `ResetFailoverTarget` <a name="ResetFailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget"></a>

```go
func ResetFailoverTarget()
```

##### `ResetMasterHeartbeatPeriod` <a name="ResetMasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod"></a>

```go
func ResetMasterHeartbeatPeriod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSslCipher` <a name="ResetSslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher"></a>

```go
func ResetSslCipher()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVerifyServerCertificate` <a name="ResetVerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate"></a>

```go
func ResetVerifyServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput">ConnectRetryIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput">DumpFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput">FailoverTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput">MasterHeartbeatPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput">SslCipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput">VerifyServerCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">DumpFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">FailoverTarget</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">SslCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `ConnectRetryIntervalInput`<sup>Optional</sup> <a name="ConnectRetryIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput"></a>

```go
func ConnectRetryIntervalInput() *f64
```

- *Type:* *f64

---

##### `DumpFilePathInput`<sup>Optional</sup> <a name="DumpFilePathInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput"></a>

```go
func DumpFilePathInput() *string
```

- *Type:* *string

---

##### `FailoverTargetInput`<sup>Optional</sup> <a name="FailoverTargetInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput"></a>

```go
func FailoverTargetInput() interface{}
```

- *Type:* interface{}

---

##### `MasterHeartbeatPeriodInput`<sup>Optional</sup> <a name="MasterHeartbeatPeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput"></a>

```go
func MasterHeartbeatPeriodInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SslCipherInput`<sup>Optional</sup> <a name="SslCipherInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput"></a>

```go
func SslCipherInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyServerCertificateInput`<sup>Optional</sup> <a name="VerifyServerCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput"></a>

```go
func VerifyServerCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ConnectRetryInterval`<sup>Required</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```go
func ConnectRetryInterval() *f64
```

- *Type:* *f64

---

##### `DumpFilePath`<sup>Required</sup> <a name="DumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```go
func DumpFilePath() *string
```

- *Type:* *string

---

##### `FailoverTarget`<sup>Required</sup> <a name="FailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```go
func FailoverTarget() interface{}
```

- *Type:* interface{}

---

##### `MasterHeartbeatPeriod`<sup>Required</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```go
func MasterHeartbeatPeriod() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SslCipher`<sup>Required</sup> <a name="SslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```go
func SslCipher() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyServerCertificate`<sup>Required</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```go
func VerifyServerCertificate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---


### SqlDatabaseInstanceRestoreBackupContextOutputReference <a name="SqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceRestoreBackupContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceRestoreBackupContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject"></a>

```go
func ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput">BackupRunIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">BackupRunId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRunIdInput`<sup>Optional</sup> <a name="BackupRunIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput"></a>

```go
func BackupRunIdInput() *f64
```

- *Type:* *f64

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```go
func BackupRunId() *f64
```

- *Type:* *f64

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---


### SqlDatabaseInstanceServerCaCertList <a name="SqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceServerCaCertList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlDatabaseInstanceServerCaCertList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get"></a>

```go
func Get(index *f64) SqlDatabaseInstanceServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlDatabaseInstanceServerCaCertOutputReference <a name="SqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceServerCaCertOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlDatabaseInstanceServerCaCertOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```go
func Sha1Fingerprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceServerCaCert
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a>

---


### SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit">ResetRetentionUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionUnit` <a name="ResetRetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit"></a>

```go
func ResetRetentionUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput">RetainedBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput">RetentionUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">RetainedBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetainedBackupsInput`<sup>Optional</sup> <a name="RetainedBackupsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput"></a>

```go
func RetainedBackupsInput() *f64
```

- *Type:* *f64

---

##### `RetentionUnitInput`<sup>Optional</sup> <a name="RetentionUnitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput"></a>

```go
func RetentionUnitInput() *string
```

- *Type:* *string

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```go
func RetainedBackups() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings">PutBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings">ResetBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled">ResetBinaryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled">ResetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays">ResetTransactionLogRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupRetentionSettings` <a name="PutBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings"></a>

```go
func PutBackupRetentionSettings(value SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `ResetBackupRetentionSettings` <a name="ResetBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings"></a>

```go
func ResetBackupRetentionSettings()
```

##### `ResetBinaryLogEnabled` <a name="ResetBinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled"></a>

```go
func ResetBinaryLogEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPointInTimeRecoveryEnabled` <a name="ResetPointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```go
func ResetPointInTimeRecoveryEnabled()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTransactionLogRetentionDays` <a name="ResetTransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays"></a>

```go
func ResetTransactionLogRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput">BackupRetentionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput">BinaryLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput">PointInTimeRecoveryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput">TransactionLogRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRetentionSettings`<sup>Required</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```go
func BackupRetentionSettings() SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a>

---

##### `BackupRetentionSettingsInput`<sup>Optional</sup> <a name="BackupRetentionSettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput"></a>

```go
func BackupRetentionSettingsInput() SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `BinaryLogEnabledInput`<sup>Optional</sup> <a name="BinaryLogEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput"></a>

```go
func BinaryLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```go
func PointInTimeRecoveryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TransactionLogRetentionDaysInput`<sup>Optional</sup> <a name="TransactionLogRetentionDaysInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput"></a>

```go
func TransactionLogRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BinaryLogEnabled`<sup>Required</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```go
func BinaryLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```go
func PointInTimeRecoveryEnabled() interface{}
```

- *Type:* interface{}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TransactionLogRetentionDays`<sup>Required</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```go
func TransactionLogRetentionDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### SqlDatabaseInstanceSettingsDatabaseFlagsList <a name="SqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsDatabaseFlagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlDatabaseInstanceSettingsDatabaseFlagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```go
func Get(index *f64) SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### SqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="SqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsInsightsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsInsightsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled">ResetQueryInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute">ResetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength">ResetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags">ResetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress">ResetRecordClientAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryInsightsEnabled` <a name="ResetQueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled"></a>

```go
func ResetQueryInsightsEnabled()
```

##### `ResetQueryPlansPerMinute` <a name="ResetQueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```go
func ResetQueryPlansPerMinute()
```

##### `ResetQueryStringLength` <a name="ResetQueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength"></a>

```go
func ResetQueryStringLength()
```

##### `ResetRecordApplicationTags` <a name="ResetRecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```go
func ResetRecordApplicationTags()
```

##### `ResetRecordClientAddress` <a name="ResetRecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress"></a>

```go
func ResetRecordClientAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput">QueryInsightsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput">QueryPlansPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput">QueryStringLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput">RecordApplicationTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput">RecordClientAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">QueryStringLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">RecordClientAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInsightsEnabledInput`<sup>Optional</sup> <a name="QueryInsightsEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput"></a>

```go
func QueryInsightsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `QueryPlansPerMinuteInput`<sup>Optional</sup> <a name="QueryPlansPerMinuteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```go
func QueryPlansPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `QueryStringLengthInput`<sup>Optional</sup> <a name="QueryStringLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```go
func QueryStringLengthInput() *f64
```

- *Type:* *f64

---

##### `RecordApplicationTagsInput`<sup>Optional</sup> <a name="RecordApplicationTagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```go
func RecordApplicationTagsInput() interface{}
```

- *Type:* interface{}

---

##### `RecordClientAddressInput`<sup>Optional</sup> <a name="RecordClientAddressInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```go
func RecordClientAddressInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInsightsEnabled`<sup>Required</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```go
func QueryInsightsEnabled() interface{}
```

- *Type:* interface{}

---

##### `QueryPlansPerMinute`<sup>Required</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```go
func QueryPlansPerMinute() *f64
```

- *Type:* *f64

---

##### `QueryStringLength`<sup>Required</sup> <a name="QueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```go
func QueryStringLength() *f64
```

- *Type:* *f64

---

##### `RecordApplicationTags`<sup>Required</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```go
func RecordApplicationTags() interface{}
```

- *Type:* interface{}

---

##### `RecordClientAddress`<sup>Required</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```go
func RecordClientAddress() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```go
func Get(index *f64) SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks">PutAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange">ResetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks">ResetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices">ResetEnablePrivatePathForGoogleCloudServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled">ResetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork">ResetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetRequireSsl">ResetRequireSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizedNetworks` <a name="PutAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks"></a>

```go
func PutAuthorizedNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedIpRange` <a name="ResetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange"></a>

```go
func ResetAllocatedIpRange()
```

##### `ResetAuthorizedNetworks` <a name="ResetAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks"></a>

```go
func ResetAuthorizedNetworks()
```

##### `ResetEnablePrivatePathForGoogleCloudServices` <a name="ResetEnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices"></a>

```go
func ResetEnablePrivatePathForGoogleCloudServices()
```

##### `ResetIpv4Enabled` <a name="ResetIpv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled"></a>

```go
func ResetIpv4Enabled()
```

##### `ResetPrivateNetwork` <a name="ResetPrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork"></a>

```go
func ResetPrivateNetwork()
```

##### `ResetRequireSsl` <a name="ResetRequireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetRequireSsl"></a>

```go
func ResetRequireSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput">AllocatedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput">AuthorizedNetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput">EnablePrivatePathForGoogleCloudServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput">Ipv4EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput">PrivateNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSslInput">RequireSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">PrivateNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl">RequireSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```go
func AuthorizedNetworks() SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `AllocatedIpRangeInput`<sup>Optional</sup> <a name="AllocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput"></a>

```go
func AllocatedIpRangeInput() *string
```

- *Type:* *string

---

##### `AuthorizedNetworksInput`<sup>Optional</sup> <a name="AuthorizedNetworksInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput"></a>

```go
func AuthorizedNetworksInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivatePathForGoogleCloudServicesInput`<sup>Optional</sup> <a name="EnablePrivatePathForGoogleCloudServicesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput"></a>

```go
func EnablePrivatePathForGoogleCloudServicesInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv4EnabledInput`<sup>Optional</sup> <a name="Ipv4EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput"></a>

```go
func Ipv4EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateNetworkInput`<sup>Optional</sup> <a name="PrivateNetworkInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput"></a>

```go
func PrivateNetworkInput() *string
```

- *Type:* *string

---

##### `RequireSslInput`<sup>Optional</sup> <a name="RequireSslInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSslInput"></a>

```go
func RequireSslInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```go
func AllocatedIpRange() *string
```

- *Type:* *string

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```go
func EnablePrivatePathForGoogleCloudServices() interface{}
```

- *Type:* interface{}

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```go
func Ipv4Enabled() interface{}
```

- *Type:* interface{}

---

##### `PrivateNetwork`<sup>Required</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```go
func PrivateNetwork() *string
```

- *Type:* *string

---

##### `RequireSsl`<sup>Required</sup> <a name="RequireSsl" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.requireSsl"></a>

```go
func RequireSsl() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---


### SqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="SqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsLocationPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication">ResetFollowGaeApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone">ResetSecondaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFollowGaeApplication` <a name="ResetFollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication"></a>

```go
func ResetFollowGaeApplication()
```

##### `ResetSecondaryZone` <a name="ResetSecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone"></a>

```go
func ResetSecondaryZone()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput">FollowGaeApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput">SecondaryZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">SecondaryZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FollowGaeApplicationInput`<sup>Optional</sup> <a name="FollowGaeApplicationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput"></a>

```go
func FollowGaeApplicationInput() *string
```

- *Type:* *string

---

##### `SecondaryZoneInput`<sup>Optional</sup> <a name="SecondaryZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput"></a>

```go
func SecondaryZoneInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `FollowGaeApplication`<sup>Required</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```go
func FollowGaeApplication() *string
```

- *Type:* *string

---

##### `SecondaryZone`<sup>Required</sup> <a name="SecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```go
func SecondaryZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---


### SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack">ResetUpdateTrack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetUpdateTrack` <a name="ResetUpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack"></a>

```go
func ResetUpdateTrack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput">UpdateTrackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">UpdateTrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `UpdateTrackInput`<sup>Optional</sup> <a name="UpdateTrackInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput"></a>

```go
func UpdateTrackInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `UpdateTrack`<sup>Required</sup> <a name="UpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```go
func UpdateTrack() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### SqlDatabaseInstanceSettingsOutputReference <a name="SqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig">PutActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration">PutBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags">PutDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod">PutDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig">PutInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration">PutIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference">PutLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy">PutPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig">PutSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy">ResetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig">ResetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType">ResetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration">ResetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement">ResetConnectorEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags">ResetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod">ResetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize">ResetDiskAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit">ResetDiskAutoresizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig">ResetInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference">ResetLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy">ResetPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig">ResetSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectoryConfig` <a name="PutActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig"></a>

```go
func PutActiveDirectoryConfig(value SqlDatabaseInstanceSettingsActiveDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `PutBackupConfiguration` <a name="PutBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration"></a>

```go
func PutBackupConfiguration(value SqlDatabaseInstanceSettingsBackupConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `PutDatabaseFlags` <a name="PutDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags"></a>

```go
func PutDatabaseFlags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDenyMaintenancePeriod` <a name="PutDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod"></a>

```go
func PutDenyMaintenancePeriod(value SqlDatabaseInstanceSettingsDenyMaintenancePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `PutInsightsConfig` <a name="PutInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig"></a>

```go
func PutInsightsConfig(value SqlDatabaseInstanceSettingsInsightsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `PutIpConfiguration` <a name="PutIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration"></a>

```go
func PutIpConfiguration(value SqlDatabaseInstanceSettingsIpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `PutLocationPreference` <a name="PutLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference"></a>

```go
func PutLocationPreference(value SqlDatabaseInstanceSettingsLocationPreference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value SqlDatabaseInstanceSettingsMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `PutPasswordValidationPolicy` <a name="PutPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy"></a>

```go
func PutPasswordValidationPolicy(value SqlDatabaseInstanceSettingsPasswordValidationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `PutSqlServerAuditConfig` <a name="PutSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig"></a>

```go
func PutSqlServerAuditConfig(value SqlDatabaseInstanceSettingsSqlServerAuditConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `ResetActivationPolicy` <a name="ResetActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy"></a>

```go
func ResetActivationPolicy()
```

##### `ResetActiveDirectoryConfig` <a name="ResetActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig"></a>

```go
func ResetActiveDirectoryConfig()
```

##### `ResetAvailabilityType` <a name="ResetAvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType"></a>

```go
func ResetAvailabilityType()
```

##### `ResetBackupConfiguration` <a name="ResetBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration"></a>

```go
func ResetBackupConfiguration()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetConnectorEnforcement` <a name="ResetConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement"></a>

```go
func ResetConnectorEnforcement()
```

##### `ResetDatabaseFlags` <a name="ResetDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```go
func ResetDatabaseFlags()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetDenyMaintenancePeriod` <a name="ResetDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod"></a>

```go
func ResetDenyMaintenancePeriod()
```

##### `ResetDiskAutoresize` <a name="ResetDiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize"></a>

```go
func ResetDiskAutoresize()
```

##### `ResetDiskAutoresizeLimit` <a name="ResetDiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit"></a>

```go
func ResetDiskAutoresizeLimit()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize"></a>

```go
func ResetDiskSize()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```

##### `ResetInsightsConfig` <a name="ResetInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig"></a>

```go
func ResetInsightsConfig()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration"></a>

```go
func ResetIpConfiguration()
```

##### `ResetLocationPreference` <a name="ResetLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference"></a>

```go
func ResetLocationPreference()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetPasswordValidationPolicy` <a name="ResetPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy"></a>

```go
func ResetPasswordValidationPolicy()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan"></a>

```go
func ResetPricingPlan()
```

##### `ResetSqlServerAuditConfig` <a name="ResetSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig"></a>

```go
func ResetSqlServerAuditConfig()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels"></a>

```go
func ResetUserLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput">ActivationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput">ActiveDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput">AvailabilityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput">BackupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput">ConnectorEnforcementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput">DatabaseFlagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput">DenyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput">DiskAutoresizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput">DiskAutoresizeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput">DiskSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput">InsightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput">LocationPreferenceInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput">PasswordValidationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput">PricingPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput">SqlServerAuditConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">ActivationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType">AvailabilityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">DiskAutoresize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize">DiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```go
func ActiveDirectoryConfig() SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a>

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() SqlDatabaseInstanceSettingsBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a>

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```go
func DatabaseFlags() SqlDatabaseInstanceSettingsDatabaseFlagsList
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```go
func DenyMaintenancePeriod() SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a>

---

##### `InsightsConfig`<sup>Required</sup> <a name="InsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```go
func InsightsConfig() SqlDatabaseInstanceSettingsInsightsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a>

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() SqlDatabaseInstanceSettingsIpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a>

---

##### `LocationPreference`<sup>Required</sup> <a name="LocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```go
func LocationPreference() SqlDatabaseInstanceSettingsLocationPreferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a>

---

##### `PasswordValidationPolicy`<sup>Required</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```go
func PasswordValidationPolicy() SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a>

---

##### `SqlServerAuditConfig`<sup>Required</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```go
func SqlServerAuditConfig() SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `ActivationPolicyInput`<sup>Optional</sup> <a name="ActivationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput"></a>

```go
func ActivationPolicyInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfigInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput"></a>

```go
func ActiveDirectoryConfigInput() SqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `AvailabilityTypeInput`<sup>Optional</sup> <a name="AvailabilityTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput"></a>

```go
func AvailabilityTypeInput() *string
```

- *Type:* *string

---

##### `BackupConfigurationInput`<sup>Optional</sup> <a name="BackupConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput"></a>

```go
func BackupConfigurationInput() SqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `ConnectorEnforcementInput`<sup>Optional</sup> <a name="ConnectorEnforcementInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput"></a>

```go
func ConnectorEnforcementInput() *string
```

- *Type:* *string

---

##### `DatabaseFlagsInput`<sup>Optional</sup> <a name="DatabaseFlagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```go
func DatabaseFlagsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DenyMaintenancePeriodInput`<sup>Optional</sup> <a name="DenyMaintenancePeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput"></a>

```go
func DenyMaintenancePeriodInput() SqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `DiskAutoresizeInput`<sup>Optional</sup> <a name="DiskAutoresizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput"></a>

```go
func DiskAutoresizeInput() interface{}
```

- *Type:* interface{}

---

##### `DiskAutoresizeLimitInput`<sup>Optional</sup> <a name="DiskAutoresizeLimitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput"></a>

```go
func DiskAutoresizeLimitInput() *f64
```

- *Type:* *f64

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput"></a>

```go
func DiskSizeInput() *f64
```

- *Type:* *f64

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `InsightsConfigInput`<sup>Optional</sup> <a name="InsightsConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput"></a>

```go
func InsightsConfigInput() SqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput"></a>

```go
func IpConfigurationInput() SqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `LocationPreferenceInput`<sup>Optional</sup> <a name="LocationPreferenceInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput"></a>

```go
func LocationPreferenceInput() SqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() SqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `PasswordValidationPolicyInput`<sup>Optional</sup> <a name="PasswordValidationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput"></a>

```go
func PasswordValidationPolicyInput() SqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput"></a>

```go
func PricingPlanInput() *string
```

- *Type:* *string

---

##### `SqlServerAuditConfigInput`<sup>Optional</sup> <a name="SqlServerAuditConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput"></a>

```go
func SqlServerAuditConfigInput() SqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```go
func ActivationPolicy() *string
```

- *Type:* *string

---

##### `AvailabilityType`<sup>Required</sup> <a name="AvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```go
func AvailabilityType() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `ConnectorEnforcement`<sup>Required</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```go
func ConnectorEnforcement() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DiskAutoresize`<sup>Required</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```go
func DiskAutoresize() interface{}
```

- *Type:* interface{}

---

##### `DiskAutoresizeLimit`<sup>Required</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```go
func DiskAutoresizeLimit() *f64
```

- *Type:* *f64

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```go
func DiskSize() *f64
```

- *Type:* *f64

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```go
func PricingPlan() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---


### SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity">ResetComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring">ResetDisallowUsernameSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval">ResetPasswordChangeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval">ResetReuseInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplexity` <a name="ResetComplexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity"></a>

```go
func ResetComplexity()
```

##### `ResetDisallowUsernameSubstring` <a name="ResetDisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring"></a>

```go
func ResetDisallowUsernameSubstring()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetPasswordChangeInterval` <a name="ResetPasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval"></a>

```go
func ResetPasswordChangeInterval()
```

##### `ResetReuseInterval` <a name="ResetReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval"></a>

```go
func ResetReuseInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput">ComplexityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput">DisallowUsernameSubstringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput">EnablePasswordPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput">PasswordChangeIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput">ReuseIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">Complexity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">ReuseInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplexityInput`<sup>Optional</sup> <a name="ComplexityInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput"></a>

```go
func ComplexityInput() *string
```

- *Type:* *string

---

##### `DisallowUsernameSubstringInput`<sup>Optional</sup> <a name="DisallowUsernameSubstringInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput"></a>

```go
func DisallowUsernameSubstringInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePasswordPolicyInput`<sup>Optional</sup> <a name="EnablePasswordPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput"></a>

```go
func EnablePasswordPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `PasswordChangeIntervalInput`<sup>Optional</sup> <a name="PasswordChangeIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput"></a>

```go
func PasswordChangeIntervalInput() *string
```

- *Type:* *string

---

##### `ReuseIntervalInput`<sup>Optional</sup> <a name="ReuseIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput"></a>

```go
func ReuseIntervalInput() *f64
```

- *Type:* *f64

---

##### `Complexity`<sup>Required</sup> <a name="Complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```go
func Complexity() *string
```

- *Type:* *string

---

##### `DisallowUsernameSubstring`<sup>Required</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```go
func DisallowUsernameSubstring() interface{}
```

- *Type:* interface{}

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```go
func EnablePasswordPolicy() interface{}
```

- *Type:* interface{}

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `PasswordChangeInterval`<sup>Required</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```go
func PasswordChangeInterval() *string
```

- *Type:* *string

---

##### `ReuseInterval`<sup>Required</sup> <a name="ReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```go
func ReuseInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval">ResetRetentionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval">ResetUploadInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetRetentionInterval` <a name="ResetRetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval"></a>

```go
func ResetRetentionInterval()
```

##### `ResetUploadInterval` <a name="ResetUploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval"></a>

```go
func ResetUploadInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput">RetentionIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput">UploadIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">UploadInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `RetentionIntervalInput`<sup>Optional</sup> <a name="RetentionIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput"></a>

```go
func RetentionIntervalInput() *string
```

- *Type:* *string

---

##### `UploadIntervalInput`<sup>Optional</sup> <a name="UploadIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput"></a>

```go
func UploadIntervalInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```go
func RetentionInterval() *string
```

- *Type:* *string

---

##### `UploadInterval`<sup>Required</sup> <a name="UploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```go
func UploadInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---


### SqlDatabaseInstanceTimeoutsOutputReference <a name="SqlDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqldatabaseinstance"

sqldatabaseinstance.NewSqlDatabaseInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlDatabaseInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



