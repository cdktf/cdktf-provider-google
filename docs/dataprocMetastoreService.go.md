# `dataprocMetastoreService` Submodule <a name="`dataprocMetastoreService` Submodule" id="@cdktf/provider-google.dataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreService <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreService(scope Construct, id *string, config DataprocMetastoreServiceConfig) DataprocMetastoreService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig">DataprocMetastoreServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig">DataprocMetastoreServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig">PutHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig">PutTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDatabaseType">ResetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetHiveMetastoreConfig">ResetHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetReleaseChannel">ResetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTelemetryConfig">ResetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value DataprocMetastoreServiceEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---

##### `PutHiveMetastoreConfig` <a name="PutHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig"></a>

```go
func PutHiveMetastoreConfig(value DataprocMetastoreServiceHiveMetastoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value DataprocMetastoreServiceMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig"></a>

```go
func PutNetworkConfig(value DataprocMetastoreServiceNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---

##### `PutTelemetryConfig` <a name="PutTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig"></a>

```go
func PutTelemetryConfig(value DataprocMetastoreServiceTelemetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts"></a>

```go
func PutTimeouts(value DataprocMetastoreServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

---

##### `ResetDatabaseType` <a name="ResetDatabaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDatabaseType"></a>

```go
func ResetDatabaseType()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetHiveMetastoreConfig` <a name="ResetHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetHiveMetastoreConfig"></a>

```go
func ResetHiveMetastoreConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReleaseChannel` <a name="ResetReleaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetReleaseChannel"></a>

```go
func ResetReleaseChannel()
```

##### `ResetTelemetryConfig` <a name="ResetTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTelemetryConfig"></a>

```go
func ResetTelemetryConfig()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.DataprocMetastoreService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.DataprocMetastoreService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.DataprocMetastoreService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.artifactGcsUri">ArtifactGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference">DataprocMetastoreServiceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfig">HiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference">DataprocMetastoreServiceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference">DataprocMetastoreServiceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference">DataprocMetastoreServiceTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference">DataprocMetastoreServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfigInput">HiveMetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannelInput">ReleaseChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfigInput">TelemetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannel">ReleaseChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactGcsUri`<sup>Required</sup> <a name="ArtifactGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.artifactGcsUri"></a>

```go
func ArtifactGcsUri() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfig"></a>

```go
func EncryptionConfig() DataprocMetastoreServiceEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference">DataprocMetastoreServiceEncryptionConfigOutputReference</a>

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `HiveMetastoreConfig`<sup>Required</sup> <a name="HiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfig"></a>

```go
func HiveMetastoreConfig() DataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataprocMetastoreServiceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference">DataprocMetastoreServiceMaintenanceWindowOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfig"></a>

```go
func NetworkConfig() DataprocMetastoreServiceNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference">DataprocMetastoreServiceNetworkConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfig"></a>

```go
func TelemetryConfig() DataprocMetastoreServiceTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference">DataprocMetastoreServiceTelemetryConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeouts"></a>

```go
func Timeouts() DataprocMetastoreServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference">DataprocMetastoreServiceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseTypeInput"></a>

```go
func DatabaseTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() DataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---

##### `HiveMetastoreConfigInput`<sup>Optional</sup> <a name="HiveMetastoreConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfigInput"></a>

```go
func HiveMetastoreConfigInput() DataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() DataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfigInput"></a>

```go
func NetworkConfigInput() DataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReleaseChannelInput`<sup>Optional</sup> <a name="ReleaseChannelInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannelInput"></a>

```go
func ReleaseChannelInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TelemetryConfigInput`<sup>Optional</sup> <a name="TelemetryConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfigInput"></a>

```go
func TelemetryConfigInput() DataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReleaseChannel`<sup>Required</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannel"></a>

```go
func ReleaseChannel() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreServiceConfig <a name="DataprocMetastoreServiceConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceId: *string,
	DatabaseType: *string,
	EncryptionConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig,
	HiveMetastoreConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow,
	Network: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig,
	Port: *f64,
	Project: *string,
	ReleaseChannel: *string,
	TelemetryConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig,
	Tier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.databaseType">DatabaseType</a></code> | <code>*string</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.hiveMetastoreConfig">HiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#id DataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.network">Network</a></code> | <code>*string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.port">Port</a></code> | <code>*f64</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#project DataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.releaseChannel">ReleaseChannel</a></code> | <code>*string</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.tier">Tier</a></code> | <code>*string</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#service_id DataprocMetastoreService#service_id}

---

##### `DatabaseType`<sup>Optional</sup> <a name="DatabaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.databaseType"></a>

```go
DatabaseType *string
```

- *Type:* *string

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#database_type DataprocMetastoreService#database_type}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.encryptionConfig"></a>

```go
EncryptionConfig DataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#encryption_config DataprocMetastoreService#encryption_config}

---

##### `HiveMetastoreConfig`<sup>Optional</sup> <a name="HiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.hiveMetastoreConfig"></a>

```go
HiveMetastoreConfig DataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#hive_metastore_config DataprocMetastoreService#hive_metastore_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#id DataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the metastore service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#labels DataprocMetastoreService#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#location DataprocMetastoreService#location}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow DataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#maintenance_window DataprocMetastoreService#maintenance_window}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#network DataprocMetastoreService#network}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.networkConfig"></a>

```go
NetworkConfig DataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#network_config DataprocMetastoreService#network_config}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#port DataprocMetastoreService#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#project DataprocMetastoreService#project}.

---

##### `ReleaseChannel`<sup>Optional</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.releaseChannel"></a>

```go
ReleaseChannel *string
```

- *Type:* *string

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#release_channel DataprocMetastoreService#release_channel}

---

##### `TelemetryConfig`<sup>Optional</sup> <a name="TelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.telemetryConfig"></a>

```go
TelemetryConfig DataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#telemetry_config DataprocMetastoreService#telemetry_config}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#tier DataprocMetastoreService#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.timeouts"></a>

```go
Timeouts DataprocMetastoreServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#timeouts DataprocMetastoreService#timeouts}

---

### DataprocMetastoreServiceEncryptionConfig <a name="DataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceEncryptionConfig {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#kms_key DataprocMetastoreService#kms_key}

---

### DataprocMetastoreServiceHiveMetastoreConfig <a name="DataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceHiveMetastoreConfig {
	Version: *string,
	ConfigOverrides: *map[string]*string,
	KerberosConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.version">Version</a></code> | <code>*string</code> | The Hive metastore schema version. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides">ConfigOverrides</a></code> | <code>*map[string]*string</code> | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig">KerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#version DataprocMetastoreService#version}

---

##### `ConfigOverrides`<sup>Optional</sup> <a name="ConfigOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides"></a>

```go
ConfigOverrides *map[string]*string
```

- *Type:* *map[string]*string

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}

---

##### `KerberosConfig`<sup>Optional</sup> <a name="KerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig"></a>

```go
KerberosConfig DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#kerberos_config DataprocMetastoreService#kerberos_config}

---

### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig {
	Keytab: github.com/cdktf/cdktf-provider-google-go/google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab,
	Krb5ConfigGcsUri: *string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab">Keytab</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | keytab block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri">Krb5ConfigGcsUri</a></code> | <code>*string</code> | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal">Principal</a></code> | <code>*string</code> | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. |

---

##### `Keytab`<sup>Required</sup> <a name="Keytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab"></a>

```go
Keytab DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#keytab DataprocMetastoreService#keytab}

---

##### `Krb5ConfigGcsUri`<sup>Required</sup> <a name="Krb5ConfigGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri"></a>

```go
Krb5ConfigGcsUri *string
```

- *Type:* *string

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#krb5_config_gcs_uri DataprocMetastoreService#krb5_config_gcs_uri}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#principal DataprocMetastoreService#principal}

---

### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
	CloudSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret">CloudSecret</a></code> | <code>*string</code> | The relative resource name of a Secret Manager secret version, in the following form:. |

---

##### `CloudSecret`<sup>Required</sup> <a name="CloudSecret" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret"></a>

```go
CloudSecret *string
```

- *Type:* *string

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#cloud_secret DataprocMetastoreService#cloud_secret}

---

### DataprocMetastoreServiceMaintenanceWindow <a name="DataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceMaintenanceWindow {
	DayOfWeek: *string,
	HourOfDay: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | The hour of day (0-23) when the window starts. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#day_of_week DataprocMetastoreService#day_of_week}

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.hourOfDay"></a>

```go
HourOfDay *f64
```

- *Type:* *f64

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#hour_of_day DataprocMetastoreService#hour_of_day}

---

### DataprocMetastoreServiceNetworkConfig <a name="DataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceNetworkConfig {
	Consumers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.property.consumers">Consumers</a></code> | <code>interface{}</code> | consumers block. |

---

##### `Consumers`<sup>Required</sup> <a name="Consumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.property.consumers"></a>

```go
Consumers interface{}
```

- *Type:* interface{}

consumers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#consumers DataprocMetastoreService#consumers}

---

### DataprocMetastoreServiceNetworkConfigConsumers <a name="DataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceNetworkConfigConsumers {
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. |

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.

It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#subnetwork DataprocMetastoreService#subnetwork}

---

### DataprocMetastoreServiceTelemetryConfig <a name="DataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceTelemetryConfig {
	LogFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.property.logFormat">LogFormat</a></code> | <code>*string</code> | The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]. |

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#log_format DataprocMetastoreService#log_format}

---

### DataprocMetastoreServiceTimeouts <a name="DataprocMetastoreServiceTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

&dataprocmetastoreservice.DataprocMetastoreServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#create DataprocMetastoreService#create}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#delete DataprocMetastoreService#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#update DataprocMetastoreService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#create DataprocMetastoreService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#delete DataprocMetastoreService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_metastore_service#update DataprocMetastoreService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreServiceEncryptionConfigOutputReference <a name="DataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput">CloudSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">CloudSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSecretInput`<sup>Optional</sup> <a name="CloudSecretInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput"></a>

```go
func CloudSecretInput() *string
```

- *Type:* *string

---

##### `CloudSecret`<sup>Required</sup> <a name="CloudSecret" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```go
func CloudSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab">PutKeytab</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeytab` <a name="PutKeytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab"></a>

```go
func PutKeytab(value DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">Keytab</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput">KeytabInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput">Krb5ConfigGcsUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">Krb5ConfigGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Keytab`<sup>Required</sup> <a name="Keytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```go
func Keytab() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a>

---

##### `KeytabInput`<sup>Optional</sup> <a name="KeytabInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput"></a>

```go
func KeytabInput() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---

##### `Krb5ConfigGcsUriInput`<sup>Optional</sup> <a name="Krb5ConfigGcsUriInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput"></a>

```go
func Krb5ConfigGcsUriInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Krb5ConfigGcsUri`<sup>Required</sup> <a name="Krb5ConfigGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```go
func Krb5ConfigGcsUri() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceHiveMetastoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig">PutKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides">ResetConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig">ResetKerberosConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKerberosConfig` <a name="PutKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig"></a>

```go
func PutKerberosConfig(value DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `ResetConfigOverrides` <a name="ResetConfigOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides"></a>

```go
func ResetConfigOverrides()
```

##### `ResetKerberosConfig` <a name="ResetKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig"></a>

```go
func ResetKerberosConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">KerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput">ConfigOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput">KerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">ConfigOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KerberosConfig`<sup>Required</sup> <a name="KerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```go
func KerberosConfig() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a>

---

##### `ConfigOverridesInput`<sup>Optional</sup> <a name="ConfigOverridesInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput"></a>

```go
func ConfigOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KerberosConfigInput`<sup>Optional</sup> <a name="KerberosConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput"></a>

```go
func KerberosConfigInput() DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ConfigOverrides`<sup>Required</sup> <a name="ConfigOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```go
func ConfigOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---


### DataprocMetastoreServiceMaintenanceWindowOutputReference <a name="DataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput"></a>

```go
func HourOfDayInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---


### DataprocMetastoreServiceNetworkConfigConsumersList <a name="DataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceNetworkConfigConsumersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataprocMetastoreServiceNetworkConfigConsumersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```go
func Get(index *f64) DataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="DataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceNetworkConfigConsumersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataprocMetastoreServiceNetworkConfigOutputReference <a name="DataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers">PutConsumers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConsumers` <a name="PutConsumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers"></a>

```go
func PutConsumers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">Consumers</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList">DataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput">ConsumersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Consumers`<sup>Required</sup> <a name="Consumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```go
func Consumers() DataprocMetastoreServiceNetworkConfigConsumersList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList">DataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `ConsumersInput`<sup>Optional</sup> <a name="ConsumersInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput"></a>

```go
func ConsumersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---


### DataprocMetastoreServiceTelemetryConfigOutputReference <a name="DataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceTelemetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceTelemetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat"></a>

```go
func ResetLogFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---


### DataprocMetastoreServiceTimeoutsOutputReference <a name="DataprocMetastoreServiceTimeoutsOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocmetastoreservice"

dataprocmetastoreservice.NewDataprocMetastoreServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocMetastoreServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



