# `dataGoogleMonitoringAppEngineService` Submodule <a name="`dataGoogleMonitoringAppEngineService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringAppEngineService <a name="DataGoogleMonitoringAppEngineService" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service google_monitoring_app_engine_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.NewDataGoogleMonitoringAppEngineService(scope Construct, id *string, config DataGoogleMonitoringAppEngineServiceConfig) DataGoogleMonitoringAppEngineService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig">DataGoogleMonitoringAppEngineServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig">DataGoogleMonitoringAppEngineServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.DataGoogleMonitoringAppEngineService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.DataGoogleMonitoringAppEngineService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.DataGoogleMonitoringAppEngineService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry">Telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels">UserLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput">ModuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId">ModuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry"></a>

```go
func Telemetry() DataGoogleMonitoringAppEngineServiceTelemetryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a>

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels"></a>

```go
func UserLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModuleIdInput`<sup>Optional</sup> <a name="ModuleIdInput" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput"></a>

```go
func ModuleIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModuleId`<sup>Required</sup> <a name="ModuleId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId"></a>

```go
func ModuleId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringAppEngineServiceConfig <a name="DataGoogleMonitoringAppEngineServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

&datagooglemonitoringappengineservice.DataGoogleMonitoringAppEngineServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModuleId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId">ModuleId</a></code> | <code>*string</code> | The ID of the App Engine module underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModuleId`<sup>Required</sup> <a name="ModuleId" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId"></a>

```go
ModuleId *string
```

- *Type:* *string

The ID of the App Engine module underlying this service.

Corresponds to the 'moduleId' resource label for a 'gae_app'
monitored resource(see https://cloud.google.com/monitoring/api/resources#tag_gae_app)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service#module_id DataGoogleMonitoringAppEngineService#module_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}.

---

### DataGoogleMonitoringAppEngineServiceTelemetry <a name="DataGoogleMonitoringAppEngineServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

&datagooglemonitoringappengineservice.DataGoogleMonitoringAppEngineServiceTelemetry {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringAppEngineServiceTelemetryList <a name="DataGoogleMonitoringAppEngineServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.NewDataGoogleMonitoringAppEngineServiceTelemetryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleMonitoringAppEngineServiceTelemetryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get"></a>

```go
func Get(index *f64) DataGoogleMonitoringAppEngineServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleMonitoringAppEngineServiceTelemetryOutputReference <a name="DataGoogleMonitoringAppEngineServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglemonitoringappengineservice"

datagooglemonitoringappengineservice.NewDataGoogleMonitoringAppEngineServiceTelemetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleMonitoringAppEngineServiceTelemetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleMonitoringAppEngineServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a>

---



